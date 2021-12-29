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
};

export default getters;
