<template>
  <div class="q-mr-lg">
    <q-btn color="primary" @click="connectUsbDevice">Conectar</q-btn>
  </div>
</template>

<script lang="ts">
//import { USBDevice } from 'w3c-web-usb';
import { Navigator, SerialPort } from '../types/webusb';
import { storeKey } from '../store';
import { useStore } from 'vuex';

let serialCache = [];

async function startWorking(port: SerialPort) {
  console.log(port);
  await port.open({ baudRate: 115200 });
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
}

export default {
  name: 'Connect',
  data: () => ({}),
  methods: {
    connectUsbDevice() {
      const usbVendorId = 0x1209;

      (navigator as unknown as Navigator).serial
        .requestPort({ filters: [{ usbVendorId }] })
        .then((port) => {
          // Connect to `port` or add it to the list of available ports.
          void startWorking(port);
        })
        .catch((e) => {
          // este catch puede pasar porque el usuario no agarro un puerto o estaba ocupado
        });
    },
  },
};
</script>
