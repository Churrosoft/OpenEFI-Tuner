<template>
  <canvas-datagrid
    v-if="rpmMapTable.table.value !== null"
    :data="rpmMapTable.table.value"
    class="ignition_table"
    showColumnHeaders="false"
    showRowHeaders="false"
  />
  <EditBar v-if="rpmMapTable.table.value !== null"
           :selection="selection"
           :tableValues="rpmMapTable?.table"
           :update-table="pathTable"/>
  <NotTableData v-if="rpmMapTable.table.value === null"/>
</template>

<script lang="ts" setup>
import {computed, onBeforeUnmount, onMounted, ref, watchEffect} from 'vue';
import {useStore} from 'vuex';

import {
  cleanTableEvents,
  getTableObserver,
  getTableRanges,
  ISelectEvent,
  ITableRow,
  makeInputChecks,
  setActiveStyle,
  TABLE_TYPES,
  useTable
} from 'src/types/table';
import {storeKey} from 'store/index';
import NotTableData from 'src/components/NotTableData.vue';
import {rpmLoadActions} from './actions';
import EditBar from 'src/components/Tables/EditBar.vue';

const store = useStore(storeKey);
const ignitionTables = computed(() => store.state.Ignition.tables.rpm_load);
const paired = computed(() => store.state.UsbLayer.paired);

let intTable: NodeJS.Timeout | null = null;
let rpm_load_loaded = false;

const selection = ref<null | ISelectEvent['selectedCells']>(null);

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

const pathTable = (newTableData: Array<ITableRow>) => {
  const ranges = getTableRanges(newTableData);
  setActiveStyle(ranges.max, ranges.min, true);
  store.dispatch('Ignition/pathTableRPM_TPS', newTableData);
}


watchEffect(() => {
  if (rpmMapTable.table.value !== null && !store.state.Ignition.tables_loading && !rpm_load_loaded) {
    rpm_load_loaded = true;
    makeInputChecks({
      store,
      table: rpmMapTable.table.value,
      tableClass: 'ignition_table',
      updateCommand: 'Ignition/pathTableRPM_TPS',
      selectChange: (newVal) => {
        selection.value = newVal
      },
    });
  }
});

onMounted(() => {
  if (ignitionTables.value) {
    const ranges = getTableRanges(ignitionTables.value.slice(1));
    setActiveStyle(ranges.max, ranges.min, true);
  }
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
