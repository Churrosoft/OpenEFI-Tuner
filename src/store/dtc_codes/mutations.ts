import { MutationTree } from 'vuex';
import { DTCCodesInterface, IDTCCode } from './state';

const mutation: MutationTree<DTCCodesInterface> = {
  appedEFICode(state, efiCode: string) {
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
  },
};

export default mutation;
