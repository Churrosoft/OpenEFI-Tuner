import { ActionTree } from 'vuex';
import { StateInterface } from '../';

import { MemoryInterface } from './state';
import { ITableRow } from 'src/types/tables';
import { IUSBCommand } from '../usb-layer';
import { ITABLE_REF, TABLE_TYPES_MAPPING } from './types';

export interface IRequestTable {
  selectedTable: ITABLE_REF;
}
export interface IGetTable {
  tableSize: number;
  setData: string;
}

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const actions: ActionTree<MemoryInterface, StateInterface> = {
  toogleMenu({ commit, state }) {
    commit('toogleMenu', !state.toogleMenu);
  },
  requestTable({ dispatch }, payload: ITABLE_REF) {
    /* void commit(payload.loadingAction, null, { root: true }); */

    const command = 21;
    const subcommand = TABLE_TYPES_MAPPING[payload].id;

    const _payload = Array(123).fill(0x0);
    _payload[0] = (subcommand >> 8) & 0xff;
    _payload[1] = subcommand & 0xff;
    void dispatch('UsbLayer/sendMessage', { command, payload: _payload }, { root: true });
  },
  async getTable({ commit, rootState, dispatch, rootGetters }, payload: IGetTable) {
    // llega la refe de la tabla y a que mutation tiene que mandar la tabla
    const tableRow: Array<ITableRow> = [];

    const endRowCommand = rootGetters['UsbLayer/getCommand'](127) as IUSBCommand;
    void dispatch('UsbLayer/removeCommand', endRowCommand, { root: true });

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
        for (let rowIndex = 0; rowIndex < payload.tableSize * 4 /* command?.payload.length */; rowIndex += 4) {
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
        /*  console.log(commandRow); */
        await timeout(10);

        void dispatch('UsbLayer/removeCommand', command, { root: true });
      }
    }
    if (tableRow.length > 1) {
      void commit(payload.setData, tableRow, { root: true });
    }
    /* void commit(payload.actions.loading, null, { root: true }); */
  },
  writeTable({ commit, state }) {
    // llega refe de la tabla, data, y mutations para loading/resultado
    commit('toogleMenu', !state.toogleMenu);
  },
  resetTable({ commit, state }) {
    // borra tabla y setea valores por defecto, recibe ref y data
    commit('toogleMenu', !state.toogleMenu);
  },

  resizeTable({ commit, state }) {
    // TDB, pero desde aca se cambiaria el tamaño de la tabla cuando cree el header de tabla nuevo en la flash
    commit('toogleMenu', !state.toogleMenu);
  },

  someAction(/* context */) {
    // your code
  },
};

export default actions;
