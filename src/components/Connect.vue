<template>
  <div class="q-mr-lg q-ml-xl">
    <q-btn color="primary" @click="connectUsbDevice">Conectar</q-btn>
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

export default defineComponent({
  name: 'Connect',
  methods: {
    connectUsbDevice() {
      const usbVendorId = 0x1209;

      (navigator as unknown as Navigator).serial
        .requestPort({ filters: [{ usbVendorId }] })
        .then((port) => {
          // Connect to `port` or add it to the list of available ports.
          void this.startWorking(port);
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .catch((_e) => {
          // este catch puede pasar porque el usuario no agarro un puerto o estaba ocupado
        });
    },
    async startWorking(port: SerialPort) {
      await port.open({ baudRate: 512000 });

      if (!port.writable) return;
      const writer = port.writable.getWriter();

      /*  const data = new Uint8Array([104, 101, 108, 108, 111]); // hello */
      /*   await writer.write(data); */
      void this.store.dispatch('UsbLayer/setWriter', writer);

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
    };
  },
});
</script>
