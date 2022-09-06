import { Module } from 'vuex';
import { StateInterface } from '../';
import state, { UsbLayerInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
export type { IUSBCommand } from './state';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const exampleModule: Module<UsbLayerInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
