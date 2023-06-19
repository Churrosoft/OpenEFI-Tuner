<template>
  <q-btn color="secondary" class="gt-xs" rounded @click="requestMetadata"> Request Dashboard </q-btn>
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
import { getUSBCommand, sendUSBCommand, SerialCommand } from 'src/types/commands';

import { storeKey } from 'store/index';
import { useStore } from 'vuex';

import RPMGauge from 'components/Dashboard/RPMGauge.vue';
import BarDisplay from 'src/components/BarDisplay/index.vue';
import SegmentDisplay from 'src/components/SegmentDisplay/index.vue';

import './dashboard.scss';

let intDashboard: NodeJS.Timeout | null = null;
const store = useStore(storeKey);

//const dashboardMetaData = computed((): IUSBCommand => store.getters['UsbLayer/getCommand'](14) as IUSBCommand);

const dashboardData = computed(() => getUSBCommand(store.getters, SerialCommand.DashboardGet));

function requestMetadata() {
  //void store.dispatch('Dashboard/requestGaugeConfig');
  // const dashboardInterval = () => {
  //   sendUSBCommand(store.dispatch, SerialCommand.DashboardGet);
  // };
  // intDashboard = setInterval(dashboardInterval, 1000);

  // localStorage.setItem('DashboardActive', 'true');

  sendUSBCommand(store.dispatch, SerialCommand.DashboardGet);
}

// watchEffect(() => {
//   if (dashboardMetaData.value) {
//     void store.dispatch('Dashboard/updateGaugeConfig', dashboardMetaData.value);
//     const dashboardInterval = () => {
//       const command = mockUSBCommand(5, SerialStatus.Ok, new Uint8Array([0xff]));
//       void store.dispatch('UsbLayer/sendMessage', command);
//     };
//     intDashboard = setInterval(dashboardInterval, 1000);
//   }
// });

watchEffect(() => {
  if (dashboardData.value) {
    void store.dispatch('Dashboard/parseStatus');
  }
});

onBeforeUnmount(() => {
  clearInterval(intDashboard as NodeJS.Timeout);
});

onMounted(() => {
  if (localStorage.getItem('DashboardActive')) {
    const dashboardInterval = () => {
      if (!store.state.UsbLayer.connected) {
        clearInterval(intDashboard as NodeJS.Timeout);
        return;
      }
      sendUSBCommand(store.dispatch, SerialCommand.DashboardGet);
    };
    localStorage.removeItem('DashboardActive');
    intDashboard = setInterval(dashboardInterval, 1000);
  }
});
</script>
