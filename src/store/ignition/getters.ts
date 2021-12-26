import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { IgnitionInterface } from './state';

const getters: GetterTree<IgnitionInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
