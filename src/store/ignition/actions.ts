/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ITableRow } from 'src/types/tables';
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand } from '../usb-layer/state';
import { defaultRPMTPS_TABLE } from './default';

import { IgnitionInterface } from './state';

const actions: ActionTree<IgnitionInterface, StateInterface> = {
  requestIgnitionTableRPMTPS({ commit }) {
    commit('setIgnitionLoading', true);
  },
  async getIgnitionTableRPMTPS({ commit }, payload) {
    commit('setTableRPM_TPS', payload);
  },
  errorTableRPMTPS({ commit }) {
    commit('setTable_RPMTPS_Status', 'error');
    commit('setTableRPM_TPS', defaultRPMTPS_TABLE);
    commit('setIgnitionLoading', false);
  },
  updateTableRPMTPS({ commit }, payload: Array<ITableRow>) {
    commit('setTableRPM_TPS', payload);
  },
  uploadTableRPMTPS({ commit }) {
    commit('setIgnitionLoading', true);
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
    commit('setIgnitionLoading', false);
  },
  someAction(/* context */) {
    // your code
  },
};

export default actions;
