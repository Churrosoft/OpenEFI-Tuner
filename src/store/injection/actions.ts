/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ITableRow } from 'src/types/tables';
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand } from '../usb-layer/state';
import { defaultInjectionVE } from './default';

import { InjectionInterface } from './state';

const actions: ActionTree<InjectionInterface, StateInterface> = {
  requestInjectionTableRPMTPS({ commit }) {
    commit('setInjectionLoading', true);
  },
  async getInjectionTableRPMTPS({ commit }, payload) {
    commit('setTableRPM_TPS', payload);
  },
  errorTableRPMTPS({ commit }) {
    commit('setTable_RPMTPS_Status', 'error');
    commit('setTableRPM_TPS', defaultInjectionVE);
    commit('setInjectionLoading', false);
  },
  updateTableRPMTPS({ commit }, payload: Array<ITableRow>) {
    commit('setTableRPM_TPS', payload);
  },
  uploadTableRPMTPS({ commit }) {
    commit('setInjectionLoading', true);
  },
  checkUploadResult({ dispatch, commit, rootGetters }) {
    const commandList = rootGetters['UsbLayer/getGroupedCommands']([25, 32]) as Array<IUSBCommand>;

    if (commandList === null) return;

    commandList.map((command) => {
      if (command !== null) {
        void dispatch('UsbLayer/removeCommand', command, {
          root: true,
        });
      }
    });
    commit('setInjectionLoading', false);
  },
  someAction(/* context */) {
    // your code
  },
};

export default actions;
