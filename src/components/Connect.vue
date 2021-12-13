<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4">
        <v-btn color="primary" @click="connectUsbDevice">Conectar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
//import { USBDevice } from 'w3c-web-usb';
import { USBDevice, Navigator } from '../types/webusb';
import { storeKey } from '../store';
import { useStore } from 'vuex';

async function startWorking(args: { device: USBDevice }) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const store = useStore(storeKey);
  const { device } = args;
  await device.selectConfiguration(1);
  await device.claimInterface(1);
  void store.dispatch('connected', device);
  let a = true;
  while (a) {
    try {
      let result = await device.transferIn(2, 128);
      void store.dispatch('recv', result);
    } catch (error) {
      break;
    }
  }
  // comp.$store.commit('setDisconnected');
}

export default {
  name: 'Connect',
  data: () => ({}),
  methods: {
    connectUsbDevice() {
      void (navigator as unknown as Navigator).usb.getDevices().then((r) => {
        if (r.length > 0) {
          this.deviceOpen(r[0]);
        } else {
          void (navigator as unknown as Navigator).usb
            .requestDevice({
              filters: [{ vendorId: 0x1209, productId: 0xeef1 }],
            })
            .then((device) => this.deviceOpen(device));
        }
      });
    },
    deviceOpen(device: USBDevice) {
      void device.open().then(() => {
        //fetch({device: device, comp: this});
        console.log(device);

        void startWorking({
          device,
        });
      });
    },
  },
};
</script>
