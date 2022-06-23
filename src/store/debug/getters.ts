import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { DebugInterface } from './state';

const getters: GetterTree<DebugInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
