<template>
  <div>
    <h4 class="q-mt-md q-mb-md">Warmup Enrichment (WUE)</h4>
    <h6 class="q-mt-md q-mb-lg">
      this table (and graph) specifies the multiplier for fuel after
      calculations during warmup, at fully warm, 100% must be specified
    </h6>
    <q-markdown
      style="max-width: 40rem"
      src="::: tip
Use 'Live Tune' toogle for adjust this table on running engine
:::"
    ></q-markdown>

    <LineChart
      dataKeyA="coolant"
      dataKeyB="wue"
      :data="mockData"
      :margins="margins"
    />
  </div>
</template>

<script setup lang="ts">
import LineChart from 'src/components/LineChart.vue';

const mockData = [
  { wue: 180, coolant: -40 },
  { wue: 180, coolant: -28 },
  { wue: 160, coolant: -17 },
  { wue: 150, coolant: -6 },
  { wue: 135, coolant: 4 },
  { wue: 125, coolant: 15 },
  { wue: 113, coolant: 26 },
  { wue: 108, coolant: 37 },
  { wue: 102, coolant: 50 },
  { wue: 100, coolant: 70 },
];

const margins = {
  x: [-50, 100],
  y: [200, 80],
};
</script>
