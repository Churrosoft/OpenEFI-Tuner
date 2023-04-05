import { ActionTree } from 'vuex';
import { StateInterface } from '../';

import { MemoryInterface } from './state';
import { ITableRow } from 'src/types/tables';
import { ITABLE_REF, TABLE_TYPES_MAPPING } from './types';
import { getInt32, parseInt32 } from 'src/types/webusb';
import CRC32 from 'src/types/CRC32';
import { IUSBCommand, mockUSBCommand, WS_status } from 'src/types/commands';

export interface IRequestTable {
  selectedTable: ITABLE_REF;
}
export interface IGetTable {
  tableSize: number;
  setData: string;
}

export interface IWriteTable {
  selectedTable: ITABLE_REF;
  data: Array<ITableRow & { index: number }>;
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

    // TODO: status/command son partes para seleccionar la tabla
    void dispatch('UsbLayer/sendMessage', { command: 0x12, status: 0x11, payload: _payload }, { root: true });
    //void dispatch('UsbLayer/sendMessage', { command, payload: _payload }, { root: true });
  },
  async getTable({ commit, rootState, dispatch, rootGetters }, payload: IGetTable) {
    // llega la refe de la tabla y a que mutation tiene que mandar la tabla
    const tableRow: Array<ITableRow> = [];

    const endRowCommand = rootGetters['UsbLayer/getCommand'](18, 240) as IUSBCommand;
    void dispatch('UsbLayer/removeCommand', endRowCommand, { root: true });

    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    for (let ind = 0; ind < commandsLength; ind++) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const command = rootGetters['UsbLayer/getCommand'](18, 224) as IUSBCommand;
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
  async writeTable({ dispatch }, { selectedTable, data }: IWriteTable) {
    // llega refe de la tabla, data, y mutations para loading/resultado

    let dataRow = Array(123).fill(0x0);
    const outputRaw: Array<number> = [];
    let index = 1;

    for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
      const row = data[rowIndex];
      Object.values(row)
        .slice(1)
        .map((rowValue) => {
          const table_x = parseInt32(Number(rowValue) * 100);
          dataRow[index] = table_x[0];
          dataRow[index + 1] = table_x[1];
          dataRow[index + 2] = table_x[2];
          dataRow[index + 3] = table_x[3];
          outputRaw.push(...table_x);
          index += 4;
        });
      dataRow[0] = row.index;
      // dataRow[1] = index - 2; // que bosta hice aca

      // TODO: add table type to status
      void dispatch('UsbLayer/sendMessage', { command: 0x13, status: 0x11, payload: dataRow }, { root: true });

      dataRow = Array(123).fill(0x0);
      index = 2;
      await timeout(15);
    }

    const subcommand = TABLE_TYPES_MAPPING[selectedTable].id;
    const outpayload = Array(123).fill(0x0);

    outpayload[0] = (subcommand >> 8) & 0xff;
    outpayload[1] = subcommand & 0xff;

    const crc32 = new CRC32().get_4(outputRaw.flat()).get();
    const crc32_arr = parseInt32(crc32);

    outpayload[2] = crc32_arr[0];
    outpayload[3] = crc32_arr[1];
    outpayload[4] = crc32_arr[2];
    outpayload[5] = crc32_arr[3];

    await timeout(15);
    // TODO: add table type to status
    void dispatch('UsbLayer/sendMessage', { command: 0x14, status: 0x11, payload: dataRow }, { root: true });

    /*  commit('toogleMenu', !state.toogleMenu); */
  },
  resetTable({ commit, state }) {
    // borra tabla y setea valores por defecto, recibe ref y data
    commit('toogleMenu', !state.toogleMenu);
  },

  resizeTable({ commit, state }) {
    // TDB, pero desde aca se cambiaria el tamaño de la tabla cuando cree el header de tabla nuevo en la flash
    commit('toogleMenu', !state.toogleMenu);
  },

  getEFIConfiguration({ commit, dispatch }) {
    const command = mockUSBCommand(100, WS_status.CMD_OK, new Uint8Array([0xff]));
    commit('cfg_loading', true);
    dispatch('UsbLayer/sendMessage', command, { root: true });
  },

  parseEFIConfiguration({ state, commit, rootGetters }) {
    const command = rootGetters['UsbLayer/getCommandArr'](1102) as Array<IUSBCommand> | null;
    const endChunkCommand = rootGetters['UsbLayer/getCommand'](1103) as IUSBCommand | null;

    let str = '';

    if (command && endChunkCommand) {
      command.map((cmd) => {
        const string = new TextDecoder().decode(cmd.payload.slice(0, 100));
        str += string;
      });

      const stringSize = getInt32(endChunkCommand.payload.slice(0, 4));
      str = str.slice(0, stringSize);
    }

    const config = JSON.parse(str)[0];

    commit('cfg_loading', false);
    commit('cfg_data', config);

    console.log(JSON.parse(str)[0]);
  },

  writeEFIConfiguration({ state, commit }) {
    //
  },

  resetEFIConfiguration({ state, commit }) {
    //
  },

  someAction(/* context */) {
    // your code
  },
};

export default actions;
