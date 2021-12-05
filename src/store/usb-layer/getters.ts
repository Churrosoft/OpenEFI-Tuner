import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { UsbLayerInterface } from './state';

const getters: GetterTree<UsbLayerInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
