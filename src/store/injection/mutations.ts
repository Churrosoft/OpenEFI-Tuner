import { MutationTree } from 'vuex';
import { InjectionInterface, ITableStatus } from './state';
import { ITableRow } from 'src/types/table';

const mutation: MutationTree<InjectionInterface> = {
  setTableRPM_TPS(state, tableData: Array<ITableRow>) {
    state.tables.rpm_load = tableData;
    state.table_cache.rpm_load = tableData;
    state.tables_loading = false;
  },
  pathTableRPM_TPS(state, tableData: Array<ITableRow>) {
    state.tables.rpm_load = tableData;
  },
  clearTableRPM_TPS(state) {
    state.tables.rpm_load = null;
  },
  setInjectionLoading(state, loading: boolean) {
    state.tables_loading = loading;
  },
  setTable_RPMTPS_Status(state, status: ITableStatus) {
    state.status.rpm_load = status;
  },
};

export default mutation;
