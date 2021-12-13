import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { LayoutInterface } from './state';

const getters: GetterTree<LayoutInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
