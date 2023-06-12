<template>
  <div>
    <h4 class="q-mt-md q-mb-md">Injection Tables</h4>
    <h6 class="q-mt-md q-mb-lg">you can view and edit injection tables from here</h6>
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
      v-if="store.state.Injection.tables_loading"
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
        <q-tab name="rpmload" label="VE Table" />
        <q-tab name="af" label="A/F Table" />
        <q-tab name="rpmbattery" label="Battery Correction" disable />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="rpmload">
          <div class="text-h6 q-mb-md">RPM/LOAD (VE Table)</div>
          <canvas-datagrid
            v-if="veTable.table.value !== null && tab === 'rpmload'"
            :data="veTable.table.value"
            showRowHeaders="false"
            showColumnHeaders="false"
            class="Injection_table"
          />

          <NotTableData v-if="veTable.table.value === null" />
        </q-tab-panel>

        <q-tab-panel name="af">
          <div class="text-h6">Load/Temp</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <NotTableData />
        </q-tab-panel>

        <q-tab-panel name="rpmbattery">
          <div class="text-h6">RPM/Battery</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <NotTableData />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { watchEffect, onMounted, onBeforeUnmount } from 'vue';
import { ref, computed } from 'vue';
import { storeKey } from 'store/index';
import { useStore } from 'vuex';
import NotTableData from 'src/components/NotTableData.vue';
import {
  TABLE_TYPES,
  makeInputChecks,
  useTable,
  cleanTableEvents,
  getTableObserver,
  setActiveStyle,
} from 'src/types/table';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let intTable: NodeJS.Timeout | null = null;

let tab = ref('rpmload');

const store = useStore(storeKey);
const InjectionTables = computed(() => store.state.Injection.tables.rpm_load);

const paired = computed(() => store.state.UsbLayer.paired);

let loaded = false;

const veTable = useTable({
  store,
  intTable,
  paired,
  actions: {
    // estas quedarian dentro de memory/tables
    start: 'Injection/requestInjectionTableRPMTPS',
    success: 'Injection/setTableRPM_TPS',
    error: 'Injection/errorTableRPMTPS',
    update: 'Injection/uploadTableRPMTPS',
    // estas solas tendrian que quedar
    storeUpdate: 'Injection/updateTableRPMTPS',
    uploadResult: 'Injection/checkUploadResult',
  },
  state: {
    tableData: InjectionTables,
  },
  table: TABLE_TYPES.INJECTION_RPM_TPS,
});

const pathTable = () => {
  if (tab.value === 'rpmload') {
    veTable.uploadTable(veTable.table.value, store.state.Injection.table_cache.rpm_load);
  }
};
const requestTable = () => {
  if (tab.value === 'rpmload') {
    veTable.requestTable();
  }
};

watchEffect(() => {
  if (tab.value === 'rpmload') {
    getTableObserver(17, 'Injection_table');
  }
});

watchEffect(() => {
  if (veTable.table.value !== null && !store.state.Injection.tables_loading && !loaded) {
    loaded = true;
    makeInputChecks({
      store,
      table: veTable.table.value,
      tableClass: 'Injection_table',
      updateCommand: 'Injection/setTableRPM_TPS',
    });
  }
});

onMounted(() => {
  if (tab.value === 'rpmload') {
    setActiveStyle('injection_ve');
    cleanTableEvents('Injection_table');
    getTableObserver(17, 'Injection_table');
  }
});

onBeforeUnmount(() => {
  if (tab.value === 'rpmload') {
    cleanTableEvents('Injection_table');
  }
});
</script>

<style>
i {
  margin-right: 1rem;
}
</style>
