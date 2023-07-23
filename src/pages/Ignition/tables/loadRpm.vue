<template>
  <canvas-datagrid
    v-if="rpmMapTable.table.value !== null"
    :data="rpmMapTable.table.value"
    showRowHeaders="false"
    showColumnHeaders="false"
    class="Injection_table"
  />

  <NotTableData v-if="rpmMapTable.table.value === null" />
</template>

<script setup lang="ts">
import { watchEffect, onMounted, onBeforeUnmount, computed } from 'vue';
import { useStore } from 'vuex';

import { makeInputChecks, TABLE_TYPES, useTable, cleanTableEvents, getTableObserver } from 'src/types/table';
import { storeKey } from 'store/index';
import NotTableData from 'src/components/NotTableData.vue';
import { rpmLoadActions } from './actions';

const store = useStore(storeKey);
const ignitionTables = computed(() => store.state.Ignition.tables.rpm_load);
const paired = computed(() => store.state.UsbLayer.paired);

let intTable: NodeJS.Timeout | null = null;
let rpm_load_loaded = false;
const rpmMapTable = useTable({
  store,
  intTable,
  paired,
  actions: rpmLoadActions,
  state: {
    tableData: ignitionTables,
  },
  table: TABLE_TYPES.IGNITION_RPM_TPS,
});

watchEffect(() => {
  if (rpmMapTable.table.value !== null && !store.state.Ignition.tables_loading && !rpm_load_loaded) {
    rpm_load_loaded = true;
    makeInputChecks({
      store,
      table: rpmMapTable.table.value,
      tableClass: 'ignition_table',
      updateCommand: 'Ignition/setTableRPM_TPS',
    });
  }
});

onMounted(() => {
  cleanTableEvents('ignition_table');
  getTableObserver(17, 'ignition_table');
});

onBeforeUnmount(() => {
  cleanTableEvents('ignition_table');
});
</script>

<style>
i {
  margin-right: 1rem;
}
</style>
