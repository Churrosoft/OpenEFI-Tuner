import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { UsbLayerInterface } from './state';

const actions: ActionTree<UsbLayerInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
