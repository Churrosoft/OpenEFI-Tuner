/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { IGNITION_RPMTPS_SIZE } from 'src/config';
import { ITableRow } from 'src/types/tables';
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand } from '../usb-layer/state';
import { defaultRPMTPS_TABLE } from './default';

import { IgnitionInterface } from './state';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
  async uploadTableRPMTPS({ dispatch, commit }, payload: Array<ITableRow>) {
    commit('setIgnitionLoading', true);

    let dataRow = Array(123).fill(0x0);
    let index = 2;

    for (let rowIndex = 0; rowIndex < payload.length; rowIndex++) {
      const row = payload[rowIndex];
      Object.values(row).map((rowValue) => {
        const table_x = new Uint8Array(new Int32Array([Number(rowValue) * 100]).buffer);
        dataRow[index] = table_x[0];
        dataRow[index + 1] = table_x[1];
        dataRow[index + 2] = table_x[2];
        dataRow[index + 3] = table_x[3];
        index += 4;
      });
      dataRow[0] = rowIndex;
      dataRow[1] = index - 2;

      void dispatch('UsbLayer/sendMessage', { command: 22, payload: dataRow }, { root: true });

      dataRow = Array(123).fill(0x0);
      index = 2;
      await timeout(15);
    }

    const subcommand = 10;
    const outpayload = Array(123).fill(0x0);

    outpayload[0] = (subcommand >> 8) & 0xff;
    outpayload[1] = subcommand & 0xff;
    await timeout(15);
    void dispatch('UsbLayer/sendMessage', { command: 24, payload: outpayload }, { root: true });
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
