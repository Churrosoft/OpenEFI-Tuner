/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { IUSBCommand } from 'src/types/commands';
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { defaultInjectionVE } from './default';

import { InjectionInterface } from './state';
import { ITableRow } from 'src/types/table';

const actions: ActionTree<InjectionInterface, StateInterface> = {
  requestInjectionTableRPMTPS({ commit }) {
    commit('setInjectionLoading', true);
  },
  async getInjectionTableRPMTPS({ commit }, payload) {
    commit('setTableRPM_TPS', payload);
  },
  async pathTableRPM_TPS({ commit }, payload) {
    commit('pathTableRPM_TPS', payload);
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
  checkUploadResult({ dispatch, commit }, payload: Array<IUSBCommand> | null) {
    if (payload === null) return;

    payload.map((command) => {
      if (command !== null) {
        void dispatch('UsbLayer/removeMesage', command, {
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
