<template>
  <canvas-datagrid
    v-if="veTable.table.value !== null"
    :data="veTable.table.value"
    showRowHeaders="false"
    showColumnHeaders="false"
    class="Injection_table"
  />

  <NotTableData v-if="veTable.table.value === null" />
</template>

<script setup lang="ts">
import { watchEffect, onMounted, onBeforeUnmount } from 'vue';
import { computed } from 'vue';
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
  getTableRanges,
} from 'src/types/table';
import { VETableActions } from './actions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let intTable: NodeJS.Timeout | null = null;

const store = useStore(storeKey);
const InjectionTables = computed(() => store.state.Injection.tables.rpm_load);

const paired = computed(() => store.state.UsbLayer.paired);

let loaded = false;

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
  if (InjectionTables.value) {
    const ranges = getTableRanges(InjectionTables.value.slice(1));
    setActiveStyle(ranges.max, ranges.min, true);
  }
  cleanTableEvents('Injection_table');
  getTableObserver(17, 'Injection_table');
});

onBeforeUnmount(() => {
  cleanTableEvents('Injection_table');
});
</script>

<style>
i {
  margin-right: 1rem;
}
</style>
