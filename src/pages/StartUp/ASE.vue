<template>
  <div>
    <h4 class="q-mt-xs q-mb-md">Afterstart Enrichment (ASE)</h4>
    <p class="q-mt-xs q-mb-lg">
      inmmediately after the engine has started it is normal to need additional
      fuel. the curve (and taper on the next tab) specifies how much (5-40%) an
      how long is the enrichment
    </p>
    <q-markdown
      style="max-width: 40rem"
      src="::: tip
Use 'Live Tunning' toogle for adjust this table on running engine
:::"
    ></q-markdown>
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="asePercentage" label="ASE Percentage" />
        <q-tab name="aseTaper" label="ASE Taper" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="asePercentage">
          <div class="q-mt-xl row items-stretch justify-center">
            <LineChart
              dataKeyA="coolant"
              dataKeyB="asePercentage"
              :data="mockData"
              :margins="margins"
              :size="{ width: 500, height: 500 }"
              :axisLabel="{ x: 'cooltan (°C)', y: 'ASE %' }"
            />

            <div style="margin-left: 6rem; width: 30vw" class="row">
              <div style="width: 100%; font-size: 24px; user-select: none">
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
                :data.prop="[
                  { asePercentage: 'ASE %', coolant: 'cooltan (°C)' },
                  ...mockData,
                ]"
                showRowHeaders="false"
                showColumnHeaders="false"
                class="asePercentage_table"
              />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="aseTaper">
          <div class="q-mt-xl row items-stretch justify-center">
            <LineChart
              dataKeyA="coolant"
              dataKeyB="aseTaper"
              :data="mockTaperData"
              :margins="taperMargins"
              :size="{ width: 500, height: 500 }"
              :axisLabel="{ x: 'cooltan (°C)', y: 'ASE Engine cycles' }"
            />

            <div style="margin-left: 6rem; width: 30vw" class="row">
              <div style="width: 100%; font-size: 24px; user-select: none">
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
                :data.prop="[
                  { aseTaper: 'ASE Engine cycles', coolant: 'cooltan (°C)' },
                  ...mockTaperData,
                ]"
                showRowHeaders="false"
                showColumnHeaders="false"
                class="asePercentage_table"
              />
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
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
  { asePercentage: 45, coolant: -40 },
  { asePercentage: 43, coolant: -28 },
  { asePercentage: 41, coolant: -17 },
  { asePercentage: 39, coolant: -6 },
  { asePercentage: 37, coolant: 4 },
  { asePercentage: 35, coolant: 15 },
  { asePercentage: 33, coolant: 26 },
  { asePercentage: 31, coolant: 37 },
  { asePercentage: 28, coolant: 50 },
  { asePercentage: 25, coolant: 70 },
];

const mockTaperData = [
  { aseTaper: 350, coolant: -40 },
  { aseTaper: 330, coolant: -28 },
  { aseTaper: 310, coolant: -17 },
  { aseTaper: 290, coolant: -6 },
  { aseTaper: 270, coolant: 4 },
  { aseTaper: 250, coolant: 15 },
  { aseTaper: 230, coolant: 26 },
  { aseTaper: 210, coolant: 37 },
  { aseTaper: 180, coolant: 50 },
  { aseTaper: 150, coolant: 70 },
];

const taperMargins = {
  x: [-50, 100],
  y: [400, 130],
};

const margins = {
  x: [-50, 100],
  y: [80, 0],
};

onMounted(() => {
  getTableObserver(2, 'asePercentage_table');
});

onBeforeUnmount(() => {
  cleanTableEvents('asePercentage_table');
});

const liveTunning = ref(false);
const tab = ref('asePercentage');
</script>
