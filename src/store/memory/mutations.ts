import { MutationTree } from 'vuex';
import { MemoryInterface } from './state';

const mutation: MutationTree<MemoryInterface> = {
  toogleMenu(state, v: boolean) {
    state.toogleMenu = v;
  },
  cfg_loading(state, p: boolean) {
    state.efi_cfg.loading = p;
  },
  cfg_data(state, p: any) {
    state.efi_cfg.data = p;
  },
};

export default mutation;
