import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { PMICInterface } from './state';

const getters: GetterTree<PMICInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
