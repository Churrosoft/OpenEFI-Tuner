/* eslint-disable @typescript-eslint/no-unsafe-assignment */
<template>
  <div>
    <h4 class="q-mt-md q-mb-md">Ignition Tables</h4>
    <h6 class="q-mt-md q-mb-lg">you can view and edit ignition tables from here</h6>
    <!--  <q-card style="width: 30vw"> -->
    <div class="row q-pa-lg" style="width: 100%">
      <q-btn flat icon="download" color="primary" @click="requestTable" rounded>
        <span class="q-mr-md" />get table info from EFI
      </q-btn>
      <span class="col-2 gt-xs"> </span>

      <q-btn icon="file_upload" color="secondary" class="gt-xs" rounded @click="pathTable">
        <span class="q-mr-md" />write tables to EFI
      </q-btn>

      <q-btn icon="file_upload" color="secondary" class="xs q-mt-md" rounded @click="pathTable">
        <span class="q-mr-md" />write tables to EFI
      </q-btn>
    </div>

    <q-linear-progress
      class="q-mb-lg q-mt-md"
      indeterminate
      rounded
      size="15px"
      animation-speed="600"
      v-if="$store.state.Ignition.tables_loading"
    />

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
        <q-tab name="rpmbattery" label="RPM/Battery" disable />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="rpmload">
          <div class="text-h6 q-mb-md">RPM/Load (Kpa)</div>
          <!--  <canvas-datagrid
            v-if="tables.rpm_load !== null"
            :data.prop="tables.rpm_load"
            showRowHeaders="false"
            showColumnHeaders="false"
            class="ignition_table"
          /> -->
          <canvas-datagrid
            v-if="tables.rpm_load !== null"
            :data.prop="tables.rpm_load"
            showRowHeaders="false"
            showColumnHeaders="false"
            class="ignition_table"
          />
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
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { defineComponent, watchEffect, watch, toRaw } from 'vue';
import { cleanTableEvents, getTableObserver, ITableRow } from 'src/types/tables';
import { ref, reactive } from 'vue';
import { storeKey } from '../../store';
import { useStore } from 'vuex';
import { mockUSBCommand } from 'src/store/usb-layer/mocks';
import { IUSBCommand } from 'src/store/usb-layer/state';
import { deepCompare } from 'src/types/compare';
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
let intTable: NodeJS.Timeout | null = null;

export default defineComponent({
  name: 'Ignition',

  components: {},
  mounted() {
    getTableObserver(17, 'ignition_table');
  },
  beforeUnmount() {
    cleanTableEvents('ignition_table');
  },
  methods: {
    requestTable() {
      void this.store.dispatch('Ignition/requestIgnitionTableRPMTPS');

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      // console.log(this.store.getters['UsbLayer/getCommand'](120));
      // void this.store.dispatch('Ignition/getIgnitionTableRPMTPS');
      const tableInterval = () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const tableAvailable = this.store.getters['UsbLayer/getCommand'](127) as IUSBCommand | null;
        if (tableAvailable) {
          console.log('table available');
          clearInterval(intTable as NodeJS.Timeout);
          void this.store.dispatch('Ignition/getIgnitionTableRPMTPS');
        }
        /*         console.log(tableAvailable); */
      };

      this.intTable = setInterval(tableInterval, 500);
    },
    pathTable() {
      const command = mockUSBCommand(27, new Uint8Array([0xff]));
      void this.store.dispatch('UsbLayer/putCommand', command);
    },
  },

  setup() {
    const tab = ref('rpmload');
    const store = useStore(storeKey);
    const ignitionTables = store.state.Ignition.tables;
    let pong = false;
    const deReferenceRows = (value: unknown) =>
      JSON.parse(JSON.stringify(value)) as Array<ITableRow>;

    const tables = reactive({ rpm_load: deReferenceRows(ignitionTables.rpm_load) });

    // Efect to wait until all values from table are available
    watchEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      /*  const tableAvailable = store.getters['UsbLayer/getCommand'](127) as IUSBCommand | null;
      if (tableAvailable) {
        void store.dispatch('Ignition/getIgnitionTableRPMTPS');
      } */
    });

    watchEffect(() => {
      if (tab.value) {
        cleanTableEvents('ignition_table');

        getTableObserver(17, 'ignition_table');
      }
    });

    watchEffect(() => {
      tables.rpm_load = deReferenceRows(ignitionTables.rpm_load);
    });

    watch(
      tables,
      (newTableValue) => {
        if (deepCompare(tables.rpm_load, toRaw(newTableValue).rpm_load)) {
          if (!pong) {
            pong = true;
            return;
          }
          console.log('table have changed', toRaw(newTableValue));
          void store.dispatch('Ignition/updateTableRPMTPS', newTableValue.rpm_load);
          pong = false;
        }
      },
      { deep: true }
    );

    return {
      tab,
      store,
      tables,
      intTable,
    };
  },
});
</script>
