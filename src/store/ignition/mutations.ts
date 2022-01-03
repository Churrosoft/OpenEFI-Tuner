import { ITableRow } from 'src/types/tables';
import { MutationTree } from 'vuex';
import { IgnitionInterface } from './state';

const mutation: MutationTree<IgnitionInterface> = {
  setTableRPM_TPS(state, tableData: Array<ITableRow>) {
    state.tables.rpm_load = tableData;
  },
  clearTableRPM_TPS(state) {
    state.tables.rpm_load = null;
  },
  setIgnitionLoading(state, loading: boolean) {
    state.tables_loading = loading;
  },

};

export default mutation;
