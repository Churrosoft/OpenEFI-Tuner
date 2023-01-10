<template>
  <q-btn color="secondary" class="gt-xs" rounded @click="requestMetadata">
    <span class="q-mr-md" />Request Dashboard
  </q-btn>
  <q-btn class="gt-xs" rounded @click="getConfig"> <span class="q-mr-md" />Request Config </q-btn>
  <q-btn class="gt-xs" rounded @click="parseConfig"> <span class="q-mr-md" />Parse Config </q-btn>
  <div class="row items-center justify-evenly q-mt-xl">
    <RPMGauge class="q-ml-md" />
    <div class="col-8 q-ml-xl">
      <div class="row items-center content-center">
        <SegmentDisplay :value="store.state.Dashboard.battery" title="Battery" unit="v" :maxValue="4" class="q-ma-sm" />
        <SegmentDisplay
          :value="store.state.Dashboard.temperature"
          title="Temp Motor"
          unit="°C"
          :maxValue="5"
          class="q-ma-sm"
        />
        <SegmentDisplay
          :value="store.state.Dashboard.airTemperature"
          title="Air Temp"
          unit="°C"
          :maxValue="4"
          class="q-ma-sm"
        />
        <SegmentDisplay :value="store.state.Dashboard.AFR" title="AFR" unit="λ" :maxValue="4" class="q-ma-sm" />
        <SegmentDisplay :value="store.state.Dashboard.load" title="MAP" unit="Kpa" :maxValue="4" class="q-ma-sm" />
        <SegmentDisplay
          :value="store.state.Dashboard.injection.time_bank_1"
          title="T INY (ch1)"
          unit="mS"
          :maxValue="4"
          class="q-ma-sm"
        />
        <SegmentDisplay
          :value="store.state.Dashboard.injection.duty_1"
          title="T Duty (ch1)"
          unit="%"
          :maxValue="4"
          class="q-ma-sm"
        />
        <SegmentDisplay :value="store.state.Dashboard.advance" title="Advance" unit="°" :maxValue="4" class="q-ma-sm" />
        <BarDisplay title="TPS" class="q-ma-sm" :value="store.state.Dashboard.tps ?? undefined" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect, onBeforeUnmount, onMounted } from 'vue';

import { IUSBCommand } from 'src/store/usb-layer/state';
import { mockUSBCommand } from 'src/store/usb-layer/mocks';

import { storeKey } from 'store/index';
import { useStore } from 'vuex';

import RPMGauge from 'components/Dashboard/RPMGauge.vue';

import './dashboard.scss';
import SegmentDisplay from 'src/components/SegmentDisplay/index.vue';
import BarDisplay from 'src/components/BarDisplay/index.vue';
import { getInt32 } from 'src/types/webusb';

let intDashboard: NodeJS.Timeout | null = null;
const store = useStore(storeKey);

const dashboardMetaData = computed((): IUSBCommand => store.getters['UsbLayer/getCommand'](14) as IUSBCommand);

const dashboardData = computed((): IUSBCommand => store.getters['UsbLayer/getCommand'](15) as IUSBCommand);

function requestMetadata() {
  void store.dispatch('Dashboard/requestGaugeConfig');
  localStorage.setItem('DashboardActive', 'true');
}

const getConfig = () => {
  void store.dispatch('Memory/getEFIConfiguration');
};

const parseConfig = () => {
  void store.dispatch('Memory/parseEFIConfiguration');
};

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

onBeforeUnmount(() => {
  clearInterval(intDashboard as NodeJS.Timeout);
});

onMounted(() => {
  if (localStorage.getItem('DashboardActive')) {
    const dashboardInterval = () => {
      const command = mockUSBCommand(5, new Uint8Array([0xff]));
      if (!store.state.UsbLayer.connected) {
        clearInterval(intDashboard as NodeJS.Timeout);
        return;
      }
      void store.dispatch('UsbLayer/sendMessage', command);
    };
    localStorage.removeItem('DashboardActive');
    intDashboard = setInterval(dashboardInterval, 1000);
  }
});
</script>
