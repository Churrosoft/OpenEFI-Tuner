/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import {
  findPayloadEnd,
  IUSBCommand,
  _arrayBufferToBase64,
} from '../usb-layer/state';

import { DebugInterface, IDebugMessage } from './state';

const mapMessageType = {
  80: 'LOG',
  81: 'INFO',
  82: 'EVENT',
  83: 'ERROR',
};

const actions: ActionTree<DebugInterface, StateInterface> = {
  async pollMessages({ commit, rootGetters, dispatch, rootState }) {
    /*  const messages: Array<IDebugMessage> = []; */

    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const commandList = rootGetters['UsbLayer/getGroupedCommands']([
      80, 81, 82, 83, 88,
    ]) as Array<IUSBCommand>;

    if (commandList === null) return;

    commandList.map((command) => {
      if (command !== null) {
        const chunk = command.payload.slice(0, findPayloadEnd(command.payload));

        /* messages.push({ type: 'LOG', msg: _arrayBufferToBase64(chunk) }); */
        commit('appendDebugMessage', {
          type: mapMessageType[command.command as 80 | 81 | 82 | 83],
          msg: _arrayBufferToBase64(chunk),
        });

        void dispatch('UsbLayer/removeCommand', command, {
          root: true,
        });
      }
    });

    /*     console.log(messages);
     */
    /*  for (let codeIndex = 0; codeIndex < codes.length; codeIndex++) {
      const code = codes[codeIndex];
      await timeout(150);
      const codeDirectory = code.slice(0, 3).toLowerCase();
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/openefi/dtc_codes@main/mocks/${codeDirectory}/${code.toLowerCase()}.json`
      );
      const jsonResponse = (await response.json()) as IDTCCode;
      commit('appedParsedCode', jsonResponse);
    } */
  },

  someAction(/* context */) {
    // your code
  },
};

export default actions;
