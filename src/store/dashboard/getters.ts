import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { DashboardInterface } from './state';

const getters: GetterTree<DashboardInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
