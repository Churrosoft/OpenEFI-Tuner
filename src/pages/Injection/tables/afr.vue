<template>
  <canvas-datagrid
      v-if="afrTable.table.value !== null"
      :data="afrTable.table.value"
      class="injection_afr_table"
      showColumnHeaders="false"
      showRowHeaders="false"
  />
  <EditBar v-if="afrTable.table.value !== null"
           :selection="selection"
           :tableValues="afrTable?.table"
           :update-table="pathTable"/>
  <NotTableData v-if="afrTable.table.value === null"/>
</template>

<script lang="ts" setup>
import {computed, onBeforeUnmount, onMounted, ref, watchEffect} from 'vue';
import {storeKey} from 'store/index';
import {useStore} from 'vuex';
import NotTableData from 'src/components/NotTableData.vue';
import {
  cleanTableEvents,
  getTableObserver,
  getTableRanges,
  ISelectEvent,
  ITableRow,
  makeInputChecks,
  setActiveStyle,
  TABLE_TYPES,
  useTable,
} from 'src/types/table';
import {AFRTableActions} from './actions';
import EditBar from 'src/components/Tables/EditBar.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let intTable: NodeJS.Timeout | null = null;

const store = useStore(storeKey);
const InjectionTables = computed(() => store.state.Injection.tables.rpm_load);

const paired = computed(() => store.state.UsbLayer.paired);

let loaded = false;
const selection = ref<null | ISelectEvent['selectedCells']>(null);

const afrTable = useTable({
  store,
  intTable,
  paired,
  actions: AFRTableActions,
  state: {
    tableData: InjectionTables,
  },
  table: TABLE_TYPES.INJECTION_RPM_TPS,
  storeIndex: 'rpm_load_afr'
});

const pathTable = (newTableData: Array<ITableRow>) => {
  const ranges = getTableRanges(newTableData);
  setActiveStyle(ranges.max, ranges.min, true);
  store.dispatch('Injection/pathTable', {tableData: newTableData, table: 'rpm_load_afr'});
}

watchEffect(() => {
  if (afrTable.table.value !== null && !store.state.Injection.tables_loading && !loaded) {
    loaded = true;
    makeInputChecks({
      store,
      table: afrTable.table.value,
      tableClass: 'injection_afr_table',
      updateCommand: 'Injection/pathTable',
      selectChange: (newVal) => {
        selection.value = newVal
      },
      storeIndex: 'rpm_load_afr'
    });
  }
});

onMounted(() => {
  if (InjectionTables.value) {
    const ranges = getTableRanges(InjectionTables.value.slice(1));
    setActiveStyle(ranges.max, ranges.min, true);
  }
  cleanTableEvents('injection_afr_table');
  getTableObserver(17, 'injection_afr_table');
});

onBeforeUnmount(() => {
  cleanTableEvents('injection_afr_table');
});
</script>

<style>
i {
  margin-right: 1rem;
}
</style>
