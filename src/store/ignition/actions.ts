/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ITableRow } from 'src/types/tables';
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand } from '../usb-layer/state';

import { IgnitionInterface } from './state';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const actions: ActionTree<IgnitionInterface, StateInterface> = {
  requestIgnitionTableRPMTPS({ commit, dispatch }) {
    commit('setIgnitionLoading', true);

    const command = 21;
    const subcommand = 10;
    const payload = Array(123).fill(0x0);

    payload[0] = (subcommand >> 8) & 0xff;
    payload[1] = subcommand & 0xff;

    void dispatch('UsbLayer/sendMessage', { command, payload }, { root: true });
  },
  async getIgnitionTableRPMTPS({ commit, rootGetters, dispatch, rootState }) {
    const tableRow: Array<ITableRow> = [];
    // por defecto, 17x17, luego hacer configurable'
    const IGNITION_RPMTPS_SIZE = 17;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const endRowCommand = rootGetters['UsbLayer/getCommand'](127) as IUSBCommand;
    void dispatch('UsbLayer/removeCommand', endRowCommand, { root: true });
    // commit('clearTableRPM_TPS');

    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    for (let ind = 0; ind < commandsLength; ind++) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const command = rootGetters['UsbLayer/getCommand'](126) as IUSBCommand;
      if (command !== null) {
        /*
        LOGICA PA' LA TABLA ACA'
        */
        if (!command?.payload) return;
        const commandRow: ITableRow = {};
        for (
          let rowIndex = 0;
          rowIndex < IGNITION_RPMTPS_SIZE * 4 /* command?.payload.length */;
          rowIndex += 4
        ) {
          const row = command?.payload;
          const buff = new Uint8Array(4);

          buff[0] = row[rowIndex];
          buff[1] = row[rowIndex + 1];
          buff[2] = row[rowIndex + 2];
          buff[3] = row[rowIndex + 3];
          const view = new DataView(buff.buffer, 0);
          commandRow[`col_${rowIndex}`] = String(view.getInt32(0, true) / 100);
        }
        //  return;
        tableRow.push(commandRow);
        await timeout(10);

        void dispatch('UsbLayer/removeCommand', command, { root: true });
      }
    }
    if (tableRow.length > 1) {
      commit('setTableRPM_TPS', tableRow);
    }

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
      await timeout(50);
    }

    const subcommand = 10;
    const outpayload = Array(123).fill(0x0);

    outpayload[0] = (subcommand >> 8) & 0xff;
    outpayload[1] = subcommand & 0xff;
    await timeout(50);
    void dispatch('UsbLayer/sendMessage', { command: 24, payload: outpayload }, { root: true });
  },
  checkUploadResult({ dispatch, commit, rootGetters }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const endRowCommand = rootGetters['UsbLayer/getCommand'](125) as IUSBCommand;
    void dispatch('UsbLayer/removeCommand', endRowCommand, { root: true });
    commit('setIgnitionLoading', false);
  },
  someAction(/* context */) {
    // your code
  },
};

export default actions;
