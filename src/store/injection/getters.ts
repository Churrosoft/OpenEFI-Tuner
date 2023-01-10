import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { InjectionInterface } from './state';

const getters: GetterTree<InjectionInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
