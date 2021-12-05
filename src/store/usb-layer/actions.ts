/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import commandHandler from '../commandHandler';
import crc, { buf2hex } from '../crc';
import { UsbLayerInterface } from './state';

const actions: ActionTree<UsbLayerInterface, StateInterface> = {
  connected({ commit, dispatch }, usbd) {
    commit('setConnection', {
      usbd: usbd,
    });
    void dispatch('sendMessage', { command: 10, subcommand: 0 });
  },
  sendMessage({ state }, { command, subcommand, payload }) {
    const buffer = new Uint8Array(new ArrayBuffer(128));
    const payloadBuffer = new Uint8Array(new ArrayBuffer(123));
    if (payload) {
      payloadBuffer.set(payload);
    }
    buffer.set([1, command, subcommand]);
    buffer.set(payloadBuffer, 3);

    const calcrc = crc(buffer.slice(0, 126));
    buffer.set([(calcrc >> 0) & 0xff, (calcrc >> 8) & 0xff], 126);
    // @ts-expect-error webusb e una japi y hermoso a la ve
    state.usbd.transferOut(1, buffer);
    //state.writer.write(buffer);
  },
  recv({ dispatch }, data) {
    const frame = new Uint8Array(data.data.buffer);
    console.log(frame);
    const protocol = frame[0];
    const command = frame[1];
    const subcommand = frame[2];
    const payload = frame.slice(3, 126);
    const checksum = buf2hex(frame.slice(126, 128).reverse().buffer);
    // Todo este bardo para comparar los dos crc como string...
    const localcrc = ('0000' + crc(frame.slice(0, 126)).toString(16)).substr(
      -4
    );
    console.log(
      'Frame recibido\nProtocolo: ' +
        protocol +
        '\nComando: ' +
        command +
        '\nSubcomando: ' +
        subcommand +
        '\nPayload: ' +
        payload +
        '\nChecksum: ' +
        checksum
    );
    if (checksum != localcrc) {
      console.warn('Checksums no coinciden!');
      console.log('Local:', localcrc);
    } else {
      commandHandler(command, subcommand, payload);
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  processCommand(i, { command, subcommand, payload }) {},

  someAction(/* context */) {
    // your code
  },
};

export default actions;
