import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand, USBCommands, UsbLayerInterface } from './state';

const getters: GetterTree<UsbLayerInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
  getCommand: (state) => (commandType: USBCommands) => {
    // si me dejo de hinchar las pelotas y uso todo en string directamente?
    const command = String(commandType).slice(1, 3);

    if (state.pending_commands) {
      let resultCommand: IUSBCommand | null = null;
      state.pending_commands.map((_comm) => {
        if (String(_comm.command) === command && resultCommand === null) {
          resultCommand = _comm;
        }
      });

      return resultCommand;
    }
    return null;
  },

  getGroupedCommands: (state) => (commandsType: Array<USBCommands>) => {
    if (state.pending_commands?.length) {
      const resultCommands = [] as Array<IUSBCommand>;
      state.pending_commands.map((_comm) => {
        if (commandsType.some((el) => String(el) === String(_comm.command))) {
          resultCommands.push(_comm);
        }
      });

      if (resultCommands.length > 0) return resultCommands;
      return null;
    }
    return null;
  },
};

export default getters;
