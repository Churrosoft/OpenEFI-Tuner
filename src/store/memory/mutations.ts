import { MutationTree } from 'vuex';
import { MemoryInterface } from './state';
import { IEFICfg } from 'src/types/efi_config';

const mutation: MutationTree<MemoryInterface> = {
  cfg_loading(state, p: boolean) {
    state.efi_cfg_loading = p;
  },
  cfg_data(state, p: IEFICfg) {
    state.efi_cfg = p;
  },
};

export default mutation;
