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
  setConnection(state, { usbd, writer }) {
    state.usbd = usbd;
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
  toogle_menu(state, v: boolean) {
    state.toogle_menu = v;
  },
};

export default mutation;
