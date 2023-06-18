import { ActionTree } from 'vuex';
import { StateInterface } from '../';

import { PMICInterface } from './state';
import {
  SerialCommand,
  SerialStatus,
  getGroupedUSBCommands,
  getUSBCommand,
  removeUSBCommand,
} from 'src/types/commands';

const actions: ActionTree<PMICInterface, StateInterface> = {
  parseFastStatus({ rootState, rootGetters, commit, dispatch }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const data = getGroupedUSBCommands(rootGetters, [
      { command: SerialCommand.PmicFastStatus, status: SerialStatus.DataChunk },
    ]);
    const dataEnd = getUSBCommand(rootGetters, SerialCommand.PmicFastStatus, SerialStatus.DataChunkEnd);

    if (!dataEnd || !data) {
      return;
    }

    const payload = [0];

    data?.map((cmd) => payload.push(...cmd.payload.slice(0, 122).filter((ch) => ch)));
    const reconstituted = String.fromCharCode.apply(null, payload.slice(1));

    data?.map((cmd) => removeUSBCommand(dispatch, cmd));
    removeUSBCommand(dispatch, dataEnd);

    commit('updateFastStatus', JSON.parse(reconstituted));
  },
  parseInjectionStatus({ rootState, rootGetters, commit, dispatch }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const data = getGroupedUSBCommands(rootGetters, [
      { command: SerialCommand.PmicInjectionStatus, status: SerialStatus.DataChunk },
    ]);
    const dataEnd = getUSBCommand(rootGetters, SerialCommand.PmicInjectionStatus, SerialStatus.DataChunkEnd);

    if (!dataEnd || !data) {
      return;
    }

    const payload = [0];

    data?.map((cmd) => payload.push(...cmd.payload.slice(0, 122).filter((ch) => ch)));
    const reconstituted = String.fromCharCode.apply(null, payload.slice(1));

    data?.map((cmd) => removeUSBCommand(dispatch, cmd));
    removeUSBCommand(dispatch, dataEnd);

    commit('updateInjectionStatus', JSON.parse(reconstituted));
  },
  parseIgnitionStatus({ rootState, rootGetters, commit, dispatch }) {
    const commandsLength = rootState.UsbLayer.pending_commands?.length;
    if (!commandsLength) return;

    const data = getGroupedUSBCommands(rootGetters, [
      { command: SerialCommand.PmicIgnitionStatus, status: SerialStatus.DataChunk },
    ]);
    const dataEnd = getUSBCommand(rootGetters, SerialCommand.PmicIgnitionStatus, SerialStatus.DataChunkEnd);

    if (!dataEnd || !data) {
      return;
    }

    const payload = [0];

    data?.map((cmd) => payload.push(...cmd.payload.slice(0, 122).filter((ch) => ch)));
    const reconstituted = String.fromCharCode.apply(null, payload.slice(1));

    data?.map((cmd) => removeUSBCommand(dispatch, cmd));
    removeUSBCommand(dispatch, dataEnd);

    commit('updateIgnitionStatus', JSON.parse(reconstituted));
  },
};

export default actions;
