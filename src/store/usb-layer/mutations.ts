import { IUSBCommand } from 'src/types/commands';
import { MutationTree } from 'vuex';
import { UsbLayerInterface } from './state';

interface IPaired {
  state: UsbLayerInterface;
  payload: {
    type: string;
    major: string;
    minor: string;
    rev: string;
  };
}

const mutation: MutationTree<UsbLayerInterface> = {
  setConnection(state, writer: WritableStreamDefaultWriter<Uint8Array>) {
    state.writer = writer;
    state.connected = true;
  },
  setDisconnected(state) {
    state.connected = false;
    state.paired = false;
    state.writer = null;
  },
  setPaired(state, { major, minor, rev, type }: IPaired['payload']) {
    state.firmware_ver = { major, minor, rev, type };
    state.paired = true;
  },
  setCommands(state, commands: Array<IUSBCommand> | null) {
    state.pending_commands = commands;
  },
  addCommand(state, command: IUSBCommand) {
    if (state.pending_commands) {
      state.pending_commands = [...state.pending_commands, command];
    } else {
      state.pending_commands = [command];
    }
  },
  toogleConnect(state, v: boolean) {
    state.connecting = v;
  },
};

export default mutation;
