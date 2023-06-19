import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { MemoryInterface } from './state';

const getters: GetterTree<MemoryInterface, StateInterface> = {
  getEFIConfig(state) {
    return state.efi_cfg;
  },
};

export default getters;
