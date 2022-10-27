import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { MemoryInterface } from './state';

const getters: GetterTree<MemoryInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
