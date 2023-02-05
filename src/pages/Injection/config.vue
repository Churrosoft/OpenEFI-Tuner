<template>
  <div>
    <h4 class="q-mt-xs q-mb-md">Injection configuration</h4>
    <p class="q-mt-xs q-mb-lg">
      desde este menu se puede modificar el tiempo de apertura de los inyectores, el tipo de combustible a usar, el tipo
      de inyector
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
        <q-tab name="deadTime" label="Injector DeadTime" />
        <q-tab name="injFlow" label="Injection cfg" />
        <q-tab name="fuelcfg" label="Fuel calculations" />
        <q-tab name="cutoff" label="Fuel cutoff / safelty" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="deadTime">
          <div class="q-mt-xl row items-stretch justify-center">
            <LineChart
              dataKeyA="voltage"
              dataKeyB="injPercentage"
              :data="mockDeadTimeCorrection"
              :margins="margins"
              :size="{ width: 500, height: 500 }"
              :axisLabel="{ x: 'Battery (V)', y: 'INY %' }"
            />

            <div style="margin-left: 6rem; width: 30vw" class="row">
              <div style="width: 100%; font-size: 24px; user-select: none">
                <q-toggle v-model="liveTunning" size="lg" val="lg" label="Live Tunning" />
              </div>
              <SegmentDisplay
                title="RPM"
                value="1450"
                style="max-width: 15rem; max-height: 8rem"
                class="q-mr-md q-mb-md"
              />
              <SegmentDisplay
                title="VBatt"
                value="14.35"
                unit="V"
                style="max-width: 15rem; max-height: 8rem"
                class="q-mb-md"
              />

              <canvas-datagrid
                style="max-width: 25vw"
                :data.prop="[{ injPercentage: 'INY %', voltage: 'Battery (V)' }, ...mockDeadTimeCorrection]"
                showRowHeaders="false"
                showColumnHeaders="false"
                class="deadTime_table"
              />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="injFlow">
          <div class="q-mt-xl row items-stretch justify-center"><InjectionForm /></div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import LineChart from 'src/components/LineChart.vue';
import InjectionForm from 'src/components/Injection/form.vue';

import SegmentDisplay from 'src/components/SegmentDisplay/index.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue';

import {
  cleanTableEvents,
  getTableObserver,
  // ITableRow,
} from 'src/types/tables';

/* 220/7.2
172/9.6
124/12
76/14.4
28/16.8
0/19.2  */

const mockDeadTimeCorrection = [
  { injPercentage: 200, voltage: 7.2 },
  { injPercentage: 172, voltage: 9.6 },
  { injPercentage: 124, voltage: 12 },
  { injPercentage: 100, voltage: 12.4 },
  { injPercentage: 76, voltage: 14.4 },
  { injPercentage: 28, voltage: 16.8 },
];

const mockTaperData = [
  { injFlow: 350, coolant: -40 },
  { injFlow: 330, coolant: -28 },
  { injFlow: 310, coolant: -17 },
  { injFlow: 290, coolant: -6 },
  { injFlow: 270, coolant: 4 },
  { injFlow: 250, coolant: 15 },
  { injFlow: 230, coolant: 26 },
  { injFlow: 210, coolant: 37 },
  { injFlow: 180, coolant: 50 },
  { injFlow: 150, coolant: 70 },
];

const taperMargins = {
  x: [-50, 100],
  y: [400, 130],
};

const margins = {
  x: [6, 18],
  y: [200, 20],
};

onMounted(() => {
  getTableObserver(2, 'deadTime_table');
  getTableObserver(2, 'aseCycles_table');
});

onBeforeUnmount(() => {
  cleanTableEvents('deadTime_table');
  cleanTableEvents('aseCycles_table');
});

const liveTunning = ref(false);
const tab = ref('deadTime');
</script>
