<template>
  <div class="q-mr-lg q-ml-xl">
    <q-btn color="primary" @click="connectUsbDevice" :disable="store.state.UsbLayer.paired">
      Connect
    </q-btn>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent } from 'vue';

//import { USBDevice } from 'w3c-web-usb';
import { Navigator, SerialPort } from '../types/webusb';
import { storeKey } from '../store';
import { useStore } from 'vuex';

let serialCache: Array<number> = [];
let intConnection: NodeJS.Timeout | null = null;

import { IUSBCommand } from 'src/store/usb-layer/state';

export default defineComponent({
  name: 'Connect',
  methods: {
    connectUsbDevice() {
      const usbVendorId = 0x1209;

      (navigator as unknown as Navigator).serial
        .requestPort({ filters: [{ usbVendorId }] })
        .then((port) => {
          // Connect to `port` or add it to the list of available ports.
          void this.store.dispatch('UsbLayer/initConnection', true);
          void this.startWorking(port);
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((_e) => {
          // este catch puede pasar porque el usuario no agarro un puerto o estaba ocupado
          void this.store.dispatch('UsbLayer/initConnection', false);
        });
    },
    async startWorking(port: SerialPort) {
      await port.open({ baudRate: 512000 });

      if (!port.writable) return;
      const writer = port.writable.getWriter();

      void this.store.dispatch('UsbLayer/setWriter', writer);

      void this.store.dispatch('UsbLayer/sendMessage', { command: 1, payload: [0xff] });

      const pingInterval = () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const command = this.store.getters['UsbLayer/getCommand'](12) as IUSBCommand;
        if (command) {
          clearInterval(intConnection as NodeJS.Timeout);
          void this.store.dispatch('UsbLayer/connected', command.payload);
          void this.store.dispatch('UsbLayer/removeCommand', command);
        }
      };

      this.intConnection = setInterval(pingInterval, 50);

      while (port.readable) {
        const reader = port.readable.getReader();
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              // |reader| has been canceled.
              break;
            }
            if (!value) return;

            serialCache = [...serialCache, ...value];

            if (serialCache.length > 127) {
              let i: number;
              let j: number;
              let command: Array<number>;
              const chunk = 128;
              let proccesed = 0;
              for (i = 0, j = serialCache.length; i < j; i += chunk) {
                command = serialCache.slice(i, i + chunk);
                if (command.length > 127) {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                  void this.store.dispatch('UsbLayer/recv', command);
                  proccesed++;
                }
              }
              serialCache = [...serialCache.slice(proccesed * 128)];
              /*  const command = serialCache.slice(0, 128);
              serialCache = [...serialCache.slice(128)]; */

              // console.log(command);
            }
          }
        } catch (error) {
          // algun dia me saco la paja y agarro el error
        } finally {
          reader.releaseLock();
        }
      }
      // comp.$store.commit('setDisconnected');
    },
  },
  setup() {
    const store = useStore(storeKey);

    return {
      store,
      intConnection,
    };
  },
});
</script>
