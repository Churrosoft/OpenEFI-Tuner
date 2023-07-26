<template>
  <div>
    <h4 class="q-mt-md q-mb-md">Injection Tables</h4>
    <h6 class="q-mt-md q-mb-lg">you can view and edit injection tables from here</h6>
    <div class="row q-pa-lg q-gutter-lg" style="width: 100%">
      <q-file
        style="max-width: 300px"
        v-model="fileUpload"
        filled
        rounded
        label="import from file"
        multiple
        accept=".msq"
      />
      <q-btn icon="save" color="secondary" class="gt-xs" outline>Export to file</q-btn>

      <q-btn icon="download" color="primary" @click="requestTable" type="file">
        <span class="q-mr-md">get from EFI</span>
      </q-btn>

      <q-btn icon="file_upload" color="secondary" class="gt-xs" @click="pathTable" :disable="!paired">
        write to EFI
      </q-btn>

      <q-btn icon="file_upload" color="secondary" class="xs q-mt-md" @click="pathTable" :disable="!paired">
        write to EFI
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
          <div class="text-h6 q-mb-md">RPM/LOAD VE Table</div>
          <VETable />
        </q-tab-panel>

        <q-tab-panel name="af">
          <div class="text-h6 q-mb-md">RPM/LOAD AF Table</div>
          <canvas-datagrid
            v-if="veTable.table.value !== null && tab === 'rpmload'"
            :data="veTable.table.value"
            showRowHeaders="false"
            showColumnHeaders="false"
            class="Injection_table"
          />

          <NotTableData v-if="veTable.table.value === null" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';
import { ref, computed } from 'vue';
import { storeKey } from 'store/index';
import { useStore } from 'vuex';
import NotTableData from 'src/components/NotTableData.vue';
import { TABLE_TYPES, useTable, setActiveStyle, getTableRanges } from 'src/types/table';
import { parseTable } from 'src/utils/config';

import VETable from './tables/ve.vue';
import { VETableActions } from './tables/actions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let intTable: NodeJS.Timeout | null = null;

let tab = ref('rpmload');
let fileUpload = ref();

const store = useStore(storeKey);
const InjectionTables = computed(() => store.state.Injection.tables.rpm_load);

const paired = computed(() => store.state.UsbLayer.paired);

const veTable = useTable({
  store,
  intTable,
  paired,
  actions: VETableActions,
  state: {
    tableData: InjectionTables,
  },
  table: TABLE_TYPES.INJECTION_RPM_TPS,
});

const pathTable = () => {
  if (tab.value === 'rpmload') {
    veTable.uploadTable(
      /* veTable.table.value */ store.state.Injection.tables.rpm_load,
      store.state.Injection.table_cache.rpm_load
    );
  }
};
const requestTable = () => {
  if (tab.value === 'rpmload') {
    veTable.requestTable();
  }
};

watchEffect(() => {
  if (fileUpload.value) {
    const reader = new FileReader();
    const parser = new DOMParser();

    reader.onload = () => {
      const xmlDoc = parser.parseFromString(reader.result?.toString() ?? '', 'text/xml');

      const table = parseTable(xmlDoc, 'VE');
      if (!table) return;

      const sortedTable = [table[0], ...table.slice(1).reverse()];

      //TODO: *SIEMPRE* setear los colores antes de meter una tabla nueva
      const ranges = getTableRanges(sortedTable);
      setActiveStyle(ranges.max, ranges.min, true);
      store.dispatch('Injection/pathTableRPM_TPS', sortedTable);
    };
    reader.readAsText(fileUpload.value[0]);
  }
});
</script>

<style>
i {
  margin-right: 1rem;
}
</style>
