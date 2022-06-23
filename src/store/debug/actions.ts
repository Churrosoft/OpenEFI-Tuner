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
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const commandList = rootGetters['UsbLayer/getGroupedCommands']([
      80, 81, 82, 83, 88,
    ]) as Array<IUSBCommand>;

    if (commandList === null) return;

    commandList.map((command) => {
      if (command !== null) {
        const chunk = command.payload.slice(0, findPayloadEnd(command.payload));

        commit('appendDebugMessage', {
          type: mapMessageType[command.command as 80 | 81 | 82 | 83],
          msg: _arrayBufferToBase64(chunk),
        } as IDebugMessage);

        void dispatch('UsbLayer/removeCommand', command, {
          root: true,
        });
      }
    });
  },

  someAction(/* context */) {
    // your code
  },
};

export default actions;
