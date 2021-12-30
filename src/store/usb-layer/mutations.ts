import { MutationTree } from 'vuex';
import { IUSBCommand, UsbLayerInterface } from './state';

interface IPaired {
  state: UsbLayerInterface;
  payload: {
    major: string;
    minor: string;
    rev: string;
  };
}

const mutation: MutationTree<UsbLayerInterface> = {
  setConnection(state, writer: WritableStreamDefaultWriter<Uint8Array>) {
    //state.usbd = usbd;
    state.writer = writer;
    state.connected = true;
  },
  setDisconnected(state) {
    state.connected = false;
    state.paired = false;
  },
  setPaired(state, { major, minor, rev }: IPaired['payload']) {
    state.firmware_ver = { major, minor, rev };
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
  toogle_menu(state, v: boolean) {
    state.toogle_menu = v;
  },
};

export default mutation;
