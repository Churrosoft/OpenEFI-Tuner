<template>
  <div>
    <h4 class="q-mt-md q-mb-md">Ignition Tables</h4>
    <h6 class="q-mt-md q-mb-lg">you can view and edit ignition tables from here</h6>
    <div class="row q-pa-lg q-gutter-lg" style="width: 100%">
      <q-btn icon="folder_open" color="secondary" class="gt-xs" outline> Read table from file </q-btn>

      <q-btn icon="save" color="secondary" class="gt-xs" outline> Save table to file </q-btn>

      <q-btn icon="download" color="primary" @click="requestTable">
        <span class="q-mr-md">get table info from EFI</span>
      </q-btn>

      <q-btn icon="file_upload" color="secondary" class="gt-xs" @click="pathTable" :disable="!paired">
        write tables to EFI
      </q-btn>

      <q-btn icon="file_upload" color="secondary" class="xs q-mt-md" @click="pathTable" :disable="!paired">
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
      v-if="store.state.Ignition.tables_loading"
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
            v-if="rpmMapTable.table.value !== null && tab === 'rpmload'"
            :data="rpmMapTable.table.value"
            showRowHeaders="false"
            showColumnHeaders="false"
            class="ignition_table"
          />

          <NotTableData v-if="rpmMapTable.table.value === null" />
        </q-tab-panel>

        <q-tab-panel name="loadtemp">
          <div class="text-h6">Load/Temp</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <NotTableData v-if="rpmMapTable.table.value === null" />
        </q-tab-panel>

        <q-tab-panel name="rpmbattery">
          <div class="text-h6">RPM/Battery</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <NotTableData v-if="rpmMapTable.table.value === null" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, onMounted, onBeforeUnmount, ref, computed } from 'vue';
import { useStore } from 'vuex';

import { makeInputChecks, TABLE_TYPES, useTable, cleanTableEvents, getTableObserver } from 'src/types/table';
import { storeKey } from 'store/index';
import NotTableData from 'src/components/NotTableData.vue';

const store = useStore(storeKey);
const ignitionTables = computed(() => store.state.Ignition.tables.rpm_load);
const paired = computed(() => store.state.UsbLayer.paired);

let intTable: NodeJS.Timeout | null = null;
let tab = ref('rpmload');
let loaded = false;

const rpmMapTable = useTable({
  store,
  intTable,
  paired,
  actions: {
    // estas quedarian dentro de memory/tables
    start: 'Ignition/requestIgnitionTableRPMTPS',
    success: 'Ignition/setTableRPM_TPS',
    error: 'Ignition/errorTableRPMTPS',
    update: 'Ignition/uploadTableRPMTPS',
    // estas solas tendrian que quedar
    storeUpdate: 'Ignition/updateTableRPMTPS',
    uploadResult: 'Ignition/checkUploadResult',
  },
  state: {
    tableData: ignitionTables,
  },
  table: TABLE_TYPES.IGNITION_RPM_TPS,
});

const pathTable = () => {
  if (tab.value === 'rpmload') {
    rpmMapTable.uploadTable(rpmMapTable.table.value, store.state.Ignition.table_cache.rpm_load);
  }
};
const requestTable = () => {
  if (tab.value === 'rpmload') {
    rpmMapTable.requestTable();
  }
};

watchEffect(() => {
  if (tab.value === 'rpmload') {
    getTableObserver(17, 'ignition_table');
  }
});

watchEffect(() => {
  if (rpmMapTable.table.value !== null && !store.state.Ignition.tables_loading && !loaded) {
    loaded = true;
    makeInputChecks({
      store,
      table: rpmMapTable.table.value,
      tableClass: 'ignition_table',
      updateCommand: 'Ignition/setTableRPM_TPS',
    });
    /*   setTimeout(() => {
      const tableRef = document.getElementsByClassName('ignition_table');
      if (tableRef[0]) {
        tableRef[0].addEventListener(
          'beforeendedit',
          function (e) {
            console.log(rpmMapTable.table.value);
          },
          false
        );
      }
    }, 100); */
  }
});

onMounted(() => {
  if (tab.value === 'rpmload') {
    cleanTableEvents('ignition_table');
    getTableObserver(17, 'ignition_table');
  }
});

onBeforeUnmount(() => {
  if (tab.value === 'rpmload') {
    cleanTableEvents('ignition_table');
  }
});
</script>

<style>
i {
  margin-right: 1rem;
}
</style>
