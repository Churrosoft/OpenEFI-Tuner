import { Module } from 'vuex';
import { StateInterface } from '../';
import state, { UsbLayerInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
export type { IUSBCommand } from './state';

export const uint8ArrayToInt32 = (
  arr: Array<number> | Uint8Array,
  from = 0
): number => {
  return Number(
    (arr[from + 1] << 8) +
      (arr[from + 2] << 16) +
      (arr[from + 3] << 24) +
      arr[from]
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const exampleModule: Module<UsbLayerInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
