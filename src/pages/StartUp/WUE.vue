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
Use 'Live Tunning' toogle for adjust this table on running engine
:::"
    ></q-markdown>

    <div class="q-mt-xl row items-stretch justify-center">
      <LineChart
        dataKeyA="coolant"
        dataKeyB="wue"
        :data="mockData"
        :margins="margins"
        :size="{ width: 550, height: 550 }"
      />

      <div style="margin-left: 6rem; width: 30vw" class="row">
        <div style="width: 100%; font-size: 24px">
          <q-toggle
            v-model="liveTunning"
            size="lg"
            val="lg"
            label="Live Tunning"
          />
        </div>
        <SegmentDisplay
          title="RPM"
          value="1450"
          style="max-width: 15rem; max-height: 8rem"
          class="q-mr-md q-mb-md"
        />
        <SegmentDisplay
          title="Temperature"
          value="69.4"
          unit="°C"
          style="max-width: 15rem; max-height: 8rem"
          class="q-mb-md"
        />

        <canvas-datagrid
          style="max-width: 25vw"
          :data.prop="[{ wue: 'WUE %', coolant: 'cooltan' }, ...mockData]"
          showRowHeaders="false"
          showColumnHeaders="false"
          class="wue_table"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LineChart from 'src/components/LineChart.vue';
import SegmentDisplay from 'src/components/SegmentDisplay/index.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue';

import {
  cleanTableEvents,
  getTableObserver,
  // ITableRow,
} from 'src/types/tables';

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

onMounted(() => {
  getTableObserver(2, 'wue_table');
});

onBeforeUnmount(() => {
  cleanTableEvents('wue_table');
});

const liveTunning = ref(false);
</script>
