/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand } from '../usb-layer/state';

import { DTCCodesInterface, IDTCCode } from './state';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function _arrayBufferToBase64(buffer: Uint8Array) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.atob(binary);
}

const actions: ActionTree<DTCCodesInterface, StateInterface> = {
  async getDTCfromEFI({ commit, rootGetters, dispatch, rootState }) {
    const codes: Array<string> = [];
    commit('setParsedLoading', true);
    commit('clearParsedCodes');

    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    for (let ind = 0; ind < commandsLength; ind++) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const command = rootGetters['UsbLayer/getCommand'](130) as IUSBCommand;
      if (command !== null) {
        const chunk = command.payload.slice(0, 8);
        codes.push(_arrayBufferToBase64(chunk));
        void dispatch('UsbLayer/removeCommand', command, {
          root: true,
        });
      }
    }

    for (let codeIndex = 0; codeIndex < codes.length; codeIndex++) {
      const code = codes[codeIndex];
      await timeout(150);
      const codeDirectory = code.slice(0, 3).toLowerCase();
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/openefi/dtc_codes@main/mocks/${codeDirectory}/${code.toLowerCase()}.json`
      );
      const jsonResponse = (await response.json()) as IDTCCode;
      commit('appedParsedCode', jsonResponse);
    }

    commit('setParsedLoading', false);
  },

  someAction(/* context */) {
    // your code
  },
};

export default actions;
