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

    const command = 21; //20;
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
    //commit('setIgnitionLoading', true);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const endRowCommand = rootGetters['UsbLayer/getCommand'](127) as IUSBCommand;
    void dispatch('UsbLayer/removeCommand', endRowCommand, {
      root: true,
    });
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
          commandRow[`col_${rowIndex}`] = String(view.getUint32(0, true) / 100);
        }
        //  return;
        tableRow.push(commandRow);
        await timeout(10);

        void dispatch('UsbLayer/removeCommand', command, {
          root: true,
        });
      }
    }
/*     console.log(tableRow);
    console.log(tableRow.length); */
    if (tableRow.length > 1) {
      commit('setTableRPM_TPS', tableRow);
    }
    /* 
    for (let codeIndex = 0; codeIndex < codes.length; codeIndex++) {
      const code = codes[codeIndex];
      await timeout(150);
      const codeDirectory = code.slice(0, 3).toLowerCase();
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/openefi/dtc_codes@main/mocks/${codeDirectory}/${code.toLowerCase()}.json`
      );
      const jsonResponse = (await response.json()) as IDTCCode;
      commit('appedParsedCode', jsonResponse);
    } */

    commit('setIgnitionLoading', false);
  },

  updateTableRPMTPS({ commit }, payload: Array<ITableRow>) {
    commit('setTableRPM_TPS', payload);
  },
  someAction(/* context */) {
    // your code
  },
};

export default actions;
