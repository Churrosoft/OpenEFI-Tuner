import { ActionTree } from 'vuex';
import { StateInterface } from '../';

import { MemoryInterface } from './state';
import { parseInt32 } from 'src/types/webusb';
import CRC32 from 'src/types/CRC32';
import {
  getGroupedUSBCommands,
  getUSBCommand,
  mockUSBCommand,
  removeUSBCommand,
  sendUSBCommand,
  SerialCode,
  SerialCommand,
  SerialStatus,
} from 'src/types/commands';
import { ITABLE_REF, TABLE_TYPES_MAPPING, ITableRow } from 'src/types/table';

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
    const tableID = TABLE_TYPES_MAPPING[payload].id;

    // SerialCode se utiliza para especificar la tabla
    sendUSBCommand(dispatch, SerialCommand.TableGet, SerialStatus.Ok, tableID as SerialCode);
  },
  async getTable({ commit, dispatch, rootGetters }, payload: IGetTable) {
    // llega la refe de la tabla y a que mutation tiene que mandar la tabla
    const tableRow: Array<ITableRow> = [];

    const endRowCommand = getUSBCommand(rootGetters, SerialCommand.Table, SerialStatus.DataChunkEnd);
    void dispatch('UsbLayer/removeCommand', endRowCommand, { root: true });

    const commandArr = getGroupedUSBCommands(rootGetters, [
      { command: SerialCommand.Table, status: SerialStatus.DataChunk },
    ]);

    if (commandArr && endRowCommand) {
      commandArr
        .sort((a, b) => a.payload[0] - b.payload[0])
        .map((command) => {
          //LOGICA PA' LA TABLA ACA'
          if (!command?.payload) return;

          const commandRow: ITableRow = {};
          const row = command?.payload;

          for (let rowIndex = 1; rowIndex < payload.tableSize * 4 + 1; rowIndex += 4) {
            const buff = new Uint8Array(4);

            buff[0] = row[rowIndex];
            buff[1] = row[rowIndex + 1];
            buff[2] = row[rowIndex + 2];
            buff[3] = row[rowIndex + 3];
            const view = new DataView(buff.buffer, 0);
            commandRow[`col_${rowIndex}`] = String(view.getInt32(0, true) / 100);
          }
          tableRow.push(commandRow);
          void dispatch('UsbLayer/removeCommand', command, { root: true });
        });
    }

    if (tableRow.length > 1) {
      void commit(payload.setData, tableRow, { root: true });
    }
  },
  async writeTable({ dispatch }, { selectedTable, data }: IWriteTable) {
    // llega refe de la tabla, data, y mutations para loading/resultado
    const tableID = TABLE_TYPES_MAPPING[selectedTable].id;

    let dataRow = Array(122).fill(0x0);
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

      sendUSBCommand(dispatch, SerialCommand.TablePut, SerialStatus.Ok, tableID as SerialCode, new Uint8Array(dataRow));

      dataRow = Array(122).fill(0x0);
      index = 1;
      await timeout(15);
    }

    const outpayload = Array(122).fill(0x0);

    const crc32 = new CRC32().get_4(outputRaw.flat()).get();
    const crc32_arr = parseInt32(crc32);

    outpayload[0] = crc32_arr[0];
    outpayload[1] = crc32_arr[1];
    outpayload[2] = crc32_arr[2];
    outpayload[3] = crc32_arr[3];

    await timeout(15);

    sendUSBCommand(dispatch, SerialCommand.TableUpload, SerialStatus.Ok, tableID as SerialCode),
      new Uint8Array(outpayload);
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
    const command = mockUSBCommand(100, SerialStatus.Ok, new Uint8Array([0xff]));
    commit('cfg_loading', true);
    dispatch('UsbLayer/sendCommand', command, { root: true });
  },

  parseEFIConfiguration({ rootState, rootGetters, commit, dispatch }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const data = getGroupedUSBCommands(rootGetters, [
      { command: SerialCommand.EngineCfgGet, status: SerialStatus.DataChunk },
    ]);
    const dataEnd = getUSBCommand(rootGetters, SerialCommand.EngineCfgGet, SerialStatus.DataChunkEnd);

    if (!dataEnd || !data) {
      return;
    }

    const payload = [0];

    data?.map((cmd) => payload.push(...cmd.payload.slice(0, 122).filter((ch) => ch)));
    const reconstituted = String.fromCharCode.apply(null, payload.slice(1));

    data?.map((cmd) => removeUSBCommand(dispatch, cmd));
    removeUSBCommand(dispatch, dataEnd);

    console.log(JSON.parse(reconstituted));
    commit('cfg_loading', false);
    commit('cfg_data', JSON.parse(reconstituted));
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
