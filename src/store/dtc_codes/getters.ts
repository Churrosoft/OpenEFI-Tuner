import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { DTCCodesInterface } from './state';

const getters: GetterTree<DTCCodesInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
