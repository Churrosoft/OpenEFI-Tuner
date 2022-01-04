/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import crc, { buf2hex } from '../crc';
import { createUSBCommand, IUSBCommand, USBCommands, UsbLayerInterface } from './state';

const actions: ActionTree<UsbLayerInterface, StateInterface> = {
  connected({ commit }, commandPayload) {
    const type = String(commandPayload[0]);
    const major = String((commandPayload[1] << 8) + commandPayload[2]);
    const minor = String((commandPayload[3] << 8) + commandPayload[4]);
    const rev = String((commandPayload[5] << 8) + commandPayload[6]);

    const typeString =
      (type === '0' && 'OpenEFI') ||
      (type === '1' && 'uEFI') ||
      (type === '2' && 'DashDash') ||
      'Unknow';

    console.log(
      `${typeString} Connected: \n` + `Major: ${major} \n` + `Minor: ${minor} \n` + `Rev: ${rev} \n`
    );
    void commit('setPaired', { major, minor, rev, type });
  },
  sendMessage({ state }, { command, payload }) {
    let rawData = Array(128).fill(0x0);

    rawData = [1, (command >> 8) & 0xff, command & 0xff, ...payload].slice(0, 128);
    const calcrc = crc(rawData.slice(0, 126));

    rawData[126] = (calcrc >> 8) & 0xff;
    rawData[127] = calcrc & 0xff;

    /*     const buffer = new Uint8Array(new ArrayBuffer(128));
    const payloadBuffer = new Uint8Array(new ArrayBuffer(123));
    if (payload) {
      payloadBuffer.set(payload);
    }
    buffer.set([1, (Number(command) >> 8) & 0xff, Number(command) & 0xff]);
    buffer.set(payloadBuffer, 3);

    const calcrc = crc(buffer.slice(0, 126));
    buffer.set([(calcrc >> 8) & 0xff, (calcrc >> 0) & 0xff, 126]); */

    const data = new Uint8Array(rawData);

    console.debug(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `Frame enviado\nProtocolo: ${1}\nComando: ${command}\nPayload: ${payload}\nChecksum: ${calcrc}`
    );

    // @ts-expect-error webusb e una japi y hermoso a la ve
    void state.writer.write(data);
  },
  removeCommand({ state, commit }, command: IUSBCommand) {
    if (!command) return;
    const filteredCommands = state.pending_commands?.filter((comm) => {
      return comm.checksum !== command.checksum;
    });
    commit('setCommands', filteredCommands);
  },
  recv({ commit }, data) {
    const frame = new Uint8Array(data);
    const protocol = frame[0];
    const command = (frame[1] << 8) + frame[2];
    const payload = frame.slice(3, 126);
    const checksum = buf2hex(frame.slice(126, 128).buffer);
    // Todo este bardo para comparar los dos crc como string...
    const localcrc = ('0000' + crc(frame.slice(0, 126)).toString(16)).substr(-4);
    const usbComand = createUSBCommand(command as USBCommands, payload, localcrc);
    console.debug(
      'Frame recibido\nProtocolo: ' +
        protocol +
        '\nComando: ' +
        command +
        '\nPayload: ' +
        payload +
        '\nChecksum: ' +
        checksum
    );
    if (checksum != localcrc) {
      console.warn('Checksums no coinciden! \n' + 'Local: ' + localcrc + '\nEFI: ' + checksum);
    } else {
      commit('addCommand', usbComand);
    }
  },

  setWriter({ commit }, serialWriter: WritableStreamDefaultWriter<Uint8Array>) {
    commit('setConnection', serialWriter);
  },

  putCommand({ commit }, payload: IUSBCommand) {
    commit('addCommand', payload);
  },
  someAction(/* context */) {
    // your code
  },
};

export default actions;
