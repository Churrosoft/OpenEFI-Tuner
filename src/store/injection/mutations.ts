import {MutationTree} from 'vuex';
import {InjectionInterface} from './state';
import {ITableRow, ITableStatus} from 'src/types/table';

const mutation: MutationTree<InjectionInterface> = {
  //TODO: refactor & remove
  setTableRPM_TPS(state, tableData: Array<ITableRow>) {
    state.tables.rpm_load = tableData;
    state.table_cache.rpm_load = tableData;
    state.tables_loading = false;
  }, pathTableRPM_TPS(state, tableData: Array<ITableRow>) {
    state.tables.rpm_load = tableData;
  }, clearTableRPM_TPS(state) {
    state.tables.rpm_load = null;
  }, setInjectionLoading(state, loading: boolean) {
    state.tables_loading = loading;
  }, setTable_RPMTPS_Status(state, status: ITableStatus) {
    state.status.rpm_load = status;
  },

  // new generics:
  setLoading(state) {
      state.tables_loading = true;
  },
  setTable(state, {table, tableData}: { table: keyof typeof state.tables, tableData: Array<ITableRow> }) {
    state.tables[table] = tableData;
    state.table_cache[table] = tableData;
    state.tables_loading = false;
  },
  pathTable(state, {table, tableData}: { table: keyof typeof state.tables, tableData: Array<ITableRow> }) {
    state.tables[table] = tableData;
  },
  clearTable(state, tableToClear: keyof typeof state.tables) {
    state.tables[tableToClear] = null;
  },
  setTableStatus(state, {status, table}: { status: ITableStatus, table: keyof typeof state.tables }) {
    state.status[table] = status;
  },
};

export default mutation;
