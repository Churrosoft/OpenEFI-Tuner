<template>
  <div>
    <h4 class="q-mt-md q-mb-md">Ignition Tables</h4>
    <h6 class="q-mt-md q-mb-lg">
      you can view and edit ignition tables from here
    </h6>
    <!--  <q-card style="width: 30vw"> -->
    <div class="row q-pa-lg" style="width: 100%">
      <q-btn flat icon="download" color="primary" rounded>
        <span class="q-mr-md" />get table info from EFI
      </q-btn>
      <span class="col-2 gt-xs"> </span>

      <q-btn icon="file_upload" color="secondary" class="gt-xs" rounded>
        <span class="q-mr-md" />write tables to EFI
      </q-btn>

      <q-btn icon="file_upload" color="secondary" class="xs q-mt-md" rounded>
        <span class="q-mr-md" />write tables to EFI
      </q-btn>
    </div>

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
        <q-tab name="rpmload" label="RPM/Load" />
        <q-tab name="loadtemp" label="Load/Temp" />
        <q-tab name="rpmbattery" label="RPM/Battery" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="rpmload">
          <div class="text-h6">RPM/Load</div>
          <canvas-datagrid
            :data.prop="data"
            showRowHeaders="false"
            showColumnHeaders="false"
            class="ignition_table"
          ></canvas-datagrid>
        </q-tab-panel>

        <q-tab-panel name="loadtemp">
          <div class="text-h6">Load/Temp</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="rpmbattery">
          <div class="text-h6">RPM/Battery</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';
import { getTableObserver } from 'src/types/tables';
import { ref } from 'vue';

/** Ejemplo tablita:
 * load(tps)/rpm
 * [  * ]  [550 ] [ 950] [1200] [1650] [2200] [2800] [3400] [3900] [4400] [4900] [5400] [7200]
 * [ 100]  (13.5) (13.0) (14.0) (14.0) (18.6) (24.0) (31.0) (33.0) (33.2) (33.4) (33.6) (34.3)
 * [ 90 ]  (13.8) (13.3) (14.0) (14.2) (17.4) (24.5) (31.2) (33.3) (33.6) (33.8) (34.1) (34.9)
 * [ 80 ]  (14.2) (13.6) (13.9) (14.4) (17.8) (25.0) (31.5) (33.7) (34.0) (34.2) (34.5) (35.5)
 * [ 70 ]  (14.5) (13.9) (13.9) (14.6) (18.3) (25.5) (31.7) (34.0) (34.4) (34.7) (35.0) (36.1)
 * [ 60 ]  (14.9) (14.2) (13.8) (14.8) (18.7) (25.9) (32.0) (34.4) (34.7) (35.1) (35.4) (36.7)
 * [ 50 ]  (15.3) (14.5) (13.8) (15.0) (19.1) (26.4) (32.2) (34.4) (35.1) (35.5) (35.9) (37.3)
 * [ 40 ]  (15.7) (14.8) (13.8) (15.2) (19.5) (26.9) (32.5) (34.4) (35.5) (35.9) (36.4) (37.9)
 * [ 30 ]  (16.1) (15.2) (14.4) (15.4) (19.9) (27.4) (32.7) (34.4) (35.9) (36.4) (36.8) (38.5)
 * [ 20 ]  (16.4) (15.5) (15.1) (15.7) (20.4) (27.4) (34.9) (34.4) (36.3) (36.8) (37.3) (39.1)
 * [ 15 ]  (16.6) (15.7) (15.4) (15.8) (20.6) (28.3) (36.0) (34.4) (34.7) (37.0) (37.5) (39.4)
 * [ 10 ]  (16.8) (16.3) (15.7) (15.9) (20.8) (28.4) (36.0) (34.4) (34.7) (37.2) (37.8) (39.7)
 * [  5 ]  (17.0) (16.5) (16.0) (16.0) (21.0) (28.5) (36.0) (34.4) (34.7) (37.4) (38.0) (40.0)
 */

// cada celda son 75px con padding

export default defineComponent({
  name: 'Ignition',

  components: {},
  setup() {
    const tab = ref('rpmload');

    watchEffect(() => {
      if (tab.value) {
        getTableObserver();
      }
    });

    return {
      tab,
      data: [
        {
          col0: '##',
          col1: '550',
          col2: '950',
          col3: '1200',
          col4: '1650',
          col5: '2200',
          col6: '2800',
          col7: '3400',
          col8: '3900',
          col9: '4400',
          col10: '4900',
          col11: '5400',
          col12: '7200',
        },
        {
          col0: '100',
          col1: '13.5',
          col2: '13.0',
          col3: '14.0',
          col4: '14.0',
          col5: '18.6',
          col6: '24.0',
          col7: '31.0',
          col8: '33.0',
          col9: '33.2',
          col10: '33.4',
          col11: '33.6',
          col12: '34.3',
        },
        {
          col0: '90',
          col1: '13.8',
          col2: '13.3',
          col3: '14.0',
          col4: '14.2',
          col5: '14.4',
          col6: '24.5',
          col7: '31.2',
          col8: '33.3',
          col9: '33.6',
          col10: '33.8',
          col11: '34.1',
          col12: '34.9',
        },
        {
          col0: '80',
          col1: '14.2',
          col2: '13.6',
          col3: '13.9',
          col4: '14.4',
          col5: '17.8',
          col6: '25.0',
          col7: '31.5',
          col8: '33.7',
          col9: '34.0',
          col10: '34.2',
          col11: '34.5',
          col12: '35.5',
        },
        {
          col0: '70',
          col1: '14.5',
          col2: '13.9',
          col3: '13.9',
          col4: '14.6',
          col5: '18.3',
          col6: '25.5',
          col7: '31.7',
          col8: '34.0',
          col9: '34.4',
          col10: '34.7',
          col11: '36.1',
          col12: '36.7',
        },
      ],

      /**
       * [  ]  () () () () () () () () () () () ()
       * [ 60 ]  (14.9) (14.2) (13.8) (14.8) (18.7) (25.9) (32.0) (34.4) (34.7) (35.1) (35.4) (36.7)
       * [ 50 ]  (15.3) (14.5) (13.8) (15.0) (19.1) (26.4) (32.2) (34.4) (35.1) (35.5) (35.9) (37.3)
       * [ 40 ]  (15.7) (14.8) (13.8) (15.2) (19.5) (26.9) (32.5) (34.4) (35.5) (35.9) (36.4) (37.9)
       * [ 30 ]  (16.1) (15.2) (14.4) (15.4) (19.9) (27.4) (32.7) (34.4) (35.9) (36.4) (36.8) (38.5)
       * [ 20 ]  (16.4) (15.5) (15.1) (15.7) (20.4) (27.4) (34.9) (34.4) (36.3) (36.8) (37.3) (39.1)
       * [ 15 ]  (16.6) (15.7) (15.4) (15.8) (20.6) (28.3) (36.0) (34.4) (34.7) (37.0) (37.5) (39.4)
       * [ 10 ]  (16.8) (16.3) (15.7) (15.9) (20.8) (28.4) (36.0) (34.4) (34.7) (37.2) (37.8) (39.7)
       * [  5 ]  (17.0) (16.5) (16.0) (16.0) (21.0) (28.5) (36.0) (34.4) (34.7) (37.4) (38.0) (40.0)
       */
    };
  },
});
</script>
