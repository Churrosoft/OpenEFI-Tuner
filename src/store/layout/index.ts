import { Module } from 'vuex';
import { StateInterface } from '../';
import state, { LayoutInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const exampleModule: Module<LayoutInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default exampleModule;
