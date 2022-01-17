<template>
  <q-page class="row items-center justify-evenly">
    <RPMGauge />
    <Battery :value="String(store.state.Dashboard.battery ?? '0000')" />
    <q-btn color="secondary" class="gt-xs" rounded @click="requestMetadata">
      <span class="q-mr-md" />Request Dashboard
    </q-btn>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { defineComponent, computed, watchEffect } from 'vue';

import { IUSBCommand } from 'src/store/usb-layer/state';
import { mockUSBCommand } from 'src/store/usb-layer/mocks';

import { storeKey } from '../store';
import { useStore } from 'vuex';

import RPMGauge from 'components/Dashboard/RPMGauge.vue';
import Battery from 'components/Dashboard/Battery/index.vue';

import './dashboard.scss';

let intDashboard: NodeJS.Timeout | null = null;

export default defineComponent({
  name: 'Dashboard',
  components: { RPMGauge, Battery },
  methods: {
    requestMetadata() {
      void this.store.dispatch('Dashboard/requestGaugeConfig');
      localStorage.setItem('DashboardActive', 'true');
    },
  },
  beforeUnmount() {
    clearInterval(intDashboard as NodeJS.Timeout);
  },
  mounted() {
    if (localStorage.getItem('DashboardActive')) {
      const dashboardInterval = () => {
        const command = mockUSBCommand(5, new Uint8Array([0xff]));
        if (!this.store.state.UsbLayer.connected) {
          clearInterval(intDashboard as NodeJS.Timeout);
          return;
        }
        void this.store.dispatch('UsbLayer/sendMessage', command);
      };
      localStorage.removeItem('DashboardActive');
      intDashboard = setInterval(dashboardInterval, 1000);
    }
  },
  setup() {
    const store = useStore(storeKey);

    const dashboardMetaData = computed(
      (): IUSBCommand => store.getters['UsbLayer/getCommand'](14) as IUSBCommand
    );

    const dashboardData = computed(
      (): IUSBCommand => store.getters['UsbLayer/getCommand'](15) as IUSBCommand
    );

    watchEffect(() => {
      if (dashboardMetaData.value) {
        void store.dispatch('Dashboard/updateGaugeConfig', dashboardMetaData.value);
        const dashboardInterval = () => {
          const command = mockUSBCommand(5, new Uint8Array([0xff]));
          void store.dispatch('UsbLayer/sendMessage', command);
        };
        intDashboard = setInterval(dashboardInterval, 1000);
      }
    });

    watchEffect(() => {
      if (dashboardData.value) {
        void store.dispatch('Dashboard/parseStatus', dashboardData.value);
      }
    });

    return { store };
  },
});
</script>
