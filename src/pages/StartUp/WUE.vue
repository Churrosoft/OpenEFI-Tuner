<template>
  <div>
    <!--  <h4 class="q-mt-md q-mb-md">DTC Status</h4>
    <h6 class="q-mt-md q-mb-lg">you can view and remove dtc/fault codes from here</h6> -->
    <LineChart dataKeyA="test" dataKeyB="test2" :data="mockData" />
  </div>
</template>

<script setup lang="ts">
/* import { storeKey } from '../../store';
import { useStore } from 'vuex'; */
import LineChart from 'src/components/LineChart.vue';

/* const $store = useStore(storeKey);
 *//*  const mockData = [
  { test: 23, test2: 34 },
  { test: 40, test2: 45 },
  { test: 60, test2: 40 },
];
 */


const mockData = {};
/* const store = $store.state.DtcCodes;
 */
</script>
