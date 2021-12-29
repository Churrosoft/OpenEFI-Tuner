<template>
  <div class="q-mr-lg">
    <q-btn color="primary" @click="connectUsbDevice">Conectar</q-btn>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent, watchEffect, watch, toRaw } from 'vue';

//import { USBDevice } from 'w3c-web-usb';
import { Navigator, SerialPort } from '../types/webusb';
import { storeKey } from '../store';
import { useStore } from 'vuex';

let serialCache = [];

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
        .catch((e) => {
          // este catch puede pasar porque el usuario no agarro un puerto o estaba ocupado
        });
    },
    async startWorking(port: SerialPort) {
      await port.open({ baudRate: 115200 });

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
            serialCache = [...value];
            if (serialCache.length >= 128) {
              const command = serialCache.slice(0, 128);
              serialCache = [...serialCache.slice(128)];
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              void this.store.dispatch('UsbLayer/recv', command);
              console.log(command);
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
