import { ITableRow } from 'src/types/tables';
import { MutationTree } from 'vuex';
import state from '../usb-layer/state';
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
  /*  appedEFICode(state, efiCode: string) {
    if (state.efiCodes === null) {
      state.efiCodes = [efiCode];
    } else {
      state.efiCodes.push(efiCode);
    }
  },
  appedParsedCode(state, efiCode: IDTCCode) {
    if (state.parsedCodes === null) {
      state.parsedCodes = [efiCode];
    } else {
      state.parsedCodes.push(efiCode);
    }
  },
  clearEFICodes(state) {
    state.efiCodes = null;
  },
  clearParsedCodes(state) {
    state.parsedCodes = null;
  },
  setEfiLoading(state, loading: boolean) {
    state.efiLoading = loading;
  },
  setParsedLoading(state, loading: boolean) {
    state.efiLoading = loading;
  }, */
};

export default mutation;
