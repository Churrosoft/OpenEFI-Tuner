<template>
  <q-page class="row items-center justify-evenly">
    <RPMGauge />

    <!--  <q-card>
      <q-card-section class="battery">
        <h5>Battery</h5>
        <span class="battery__digit-container">
          <div class="battery__digit-container--digits">
            <h4 class="battery__dseg-display"></h4>
            <h4 class="battery__dseg-display__background">8888</h4>
          </div>
          <h4 class="battery__digit-container--volts">V</h4>
        </span>
      </q-card-section>
    </q-card> -->
    <Battery :value="String(store.state.Dashboard.battery ?? '0000')" />
    <q-btn color="secondary" class="gt-xs" rounded @click="requestMetadata">
      <span class="q-mr-md" />Request Dashboard
    </q-btn>
    <!--   <div>
      <example-component
        title="Example component"
        active
        :todos="todos"
        :meta="meta"
      ></example-component>
      <q-btn @click="sendHello"> Send EFI HELLO </q-btn>
      <canvas
        id="canvas-id"
        data-type="radial-gauge"
      ></canvas>
    </div> -->
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//.padStart(5,"!")
import RPMGauge from 'components/Dashboard/RPMGauge.vue';
import Battery from 'components/Dashboard/Battery/index.vue';
import { IUSBCommand } from 'src/store/usb-layer/state';

import { defineComponent, computed, watchEffect } from 'vue';
import { storeKey } from '../store';
import { useStore } from 'vuex';
import './dashboard.scss';
import { mockUSBCommand } from 'src/store/usb-layer/mocks';

let intDashboard: NodeJS.Timeout | null = null;

export default defineComponent({
  name: 'PageIndex',
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
        void this.store.dispatch('UsbLayer/sendMessage', command);
      };
      localStorage.removeItem('DashboardActive');
      intDashboard = setInterval(dashboardInterval, 1000);
    }
  },
  setup() {
    const store = useStore(storeKey);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
