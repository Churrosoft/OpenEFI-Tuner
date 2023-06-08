/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { IUSBCommand } from 'src/types/commands';
import { ITableRow } from 'src/types/tables';
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
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
  checkUploadResult({ dispatch, commit }, payload: Array<IUSBCommand> | null) {
    if (payload === null) return;

    payload.map((command) => {
      if (command !== null) {
        void dispatch('UsbLayer/removeMesage', command, {
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
