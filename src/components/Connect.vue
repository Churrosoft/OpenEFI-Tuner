<template>
  <div class="q-mr-lg q-ml-xl">
    <q-btn color="primary" @click="connectUsbDevice" :disable="store.state.UsbLayer.paired"> Connect </q-btn>
  </div>
</template>

<script setup lang="ts">
import { storeKey } from 'store/index';
import { useStore } from 'vuex';
import { startWorking } from 'src/store/usb-layer/serialInterface';

const store = useStore(storeKey);

const connectUsbDevice = () => {
  // por ahora solo filtro por vendor
  const usbVendorId = 0x1209;

  navigator.serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      void store.dispatch('UsbLayer/initConnection', true);
      void startWorking(port, store);
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((_e) => {
      // este catch puede pasar porque el usuario no agarro un puerto o estaba ocupado
      void store.dispatch('UsbLayer/initConnection', false);
    });
};
</script>
