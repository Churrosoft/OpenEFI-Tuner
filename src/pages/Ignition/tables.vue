<template>
  <div>
    <h4 class="q-mt-md q-mb-md">Ignition Tables</h4>
    <h6 class="q-mt-md q-mb-lg">you can view and edit ignition tables from here</h6>
    <div class="row q-pa-lg q-gutter-lg" style="width: 100%">
      <q-btn icon="folder_open" color="secondary" class="gt-xs" outline>
        Read table from file
      </q-btn>

      <q-btn icon="save" color="secondary" class="gt-xs" outline> Save table to file </q-btn>

      <q-btn icon="download" color="primary" @click="requestTable">
        <span class="q-mr-md">get table info from EFI</span>
      </q-btn>

      <q-btn
        icon="file_upload"
        color="secondary"
        class="gt-xs"
        @click="pathTable"
        :disable="!paired"
      >
        write tables to EFI
      </q-btn>

      <q-btn
        icon="file_upload"
        color="secondary"
        class="xs q-mt-md"
        @click="pathTable"
        :disable="!paired"
      >
        write tables to EFI
      </q-btn>

      <!--  
      Ejemplo boton con animacion de loading  
      <q-btn :loading="loading[3]" color="primary" @click="simulateProgress(3)" style="width: 150px">
      Button
      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        Loading...
      </template>
    </q-btn> -->
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
        <q-tab name="loadtemp" label="Temp/Load" />
        <q-tab name="rpmbattery" label="RPM/Battery" disable />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="rpmload">
          <div class="text-h6 q-mb-md">RPM/Load (Kpa)</div>
          <canvas-datagrid
            v-if="tables.rpm_load !== null"
            :data.prop="tables.rpm_load"
            showRowHeaders="false"
            showColumnHeaders="false"
            class="ignition_table"
          />

          <NotTableData v-if="tables.rpm_load === null" />
        </q-tab-panel>

        <q-tab-panel name="loadtemp">
          <div class="text-h6">Load/Temp</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <NotTableData v-if="tables.rpm_load === null" />
        </q-tab-panel>

        <q-tab-panel name="rpmbattery">
          <div class="text-h6">RPM/Battery</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <NotTableData v-if="tables.rpm_load === null" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { defineComponent, watchEffect, watch, toRaw } from 'vue';
import { cleanTableEvents, getTableObserver, ITableRow } from 'src/types/tables';
import { ref, reactive, computed } from 'vue';
import { storeKey } from '../../store';
import { useStore } from 'vuex';
import { IUSBCommand } from 'src/store/usb-layer/state';
import { deepCompare } from 'src/types/compare';

import NotTableData from 'src/components/NotTableData.vue';
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

  components: { NotTableData },
  mounted() {
    getTableObserver(17, 'ignition_table');
  },
  beforeUnmount() {
    cleanTableEvents('ignition_table');
  },
  methods: {
    requestTable() {
      if (!this.paired) return;
      void this.store.dispatch('Ignition/requestIgnitionTableRPMTPS');

      const tableInterval = () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const tableAvailable = this.store.getters['UsbLayer/getCommand'](127) as IUSBCommand | null;
        if (tableAvailable) {
          console.log('table available');
          clearInterval(intTable as NodeJS.Timeout);
          void this.store.dispatch('Ignition/getIgnitionTableRPMTPS');
        }
      };

      this.intTable = setInterval(tableInterval, 250);
    },
    pathTable() {
      if (!this.paired) return;
      void this.store.dispatch('Ignition/uploadTableRPMTPS', this.tables.rpm_load);
    },
  },

  setup() {
    const tab = ref('rpmload');
    const store = useStore(storeKey);
    const ignitionTables = store.state.Ignition.tables;
    let pong = {
      rpm_load: false,
    };

    const deReferenceRows = (value: unknown) =>
      JSON.parse(JSON.stringify(value)) as Array<ITableRow>;

    const tables = reactive({ rpm_load: deReferenceRows(ignitionTables.rpm_load) });

    const uploadResult = computed(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      (): IUSBCommand => store.getters['UsbLayer/getCommand'](125) as IUSBCommand
    );

    const paired = store.state.UsbLayer.paired;

    watchEffect(() => {
      if (tab.value) {
        cleanTableEvents('ignition_table');

        getTableObserver(17, 'ignition_table');
      }
    });

    watchEffect(() => {
      tables.rpm_load = deReferenceRows(ignitionTables.rpm_load);
    });

    watchEffect(() => {
      if (uploadResult.value) {
        void store.dispatch('Ignition/checkUploadResult', uploadResult.value);
      }
    });

    watch(
      tables,
      (newTableValue) => {
        if (deepCompare(tables.rpm_load, toRaw(newTableValue).rpm_load)) {
          if (!pong.rpm_load) {
            pong.rpm_load = true;
            return;
          }
          console.log('table have changed', toRaw(newTableValue));
          void store.dispatch('Ignition/updateTableRPMTPS', newTableValue.rpm_load);
          pong.rpm_load = false;
        }
      },
      { deep: true }
    );

    return {
      tab,
      store,
      tables,
      intTable,
      paired,
    };
  },
});
</script>

<style>
i {
  margin-right: 1rem;
}
</style>
