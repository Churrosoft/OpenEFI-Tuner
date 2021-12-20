import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand, USBCommands, UsbLayerInterface } from './state';

const getters: GetterTree<UsbLayerInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
  getCommand(state, commandType: USBCommands) {
    const command = String(commandType).slice(0);
    const subcommand = String(commandType).slice(1);
    if (state.pending_commands) {
      let resultCommand: IUSBCommand | null = null;

      state.pending_commands.map((_comm) => {
        if (String(_comm.command) === command) {
          if (subcommand && String(_comm.subcommand) === subcommand) {
            resultCommand = _comm;
          } else if (!subcommand) {
            // valid command without subcommand
            resultCommand = _comm;
          } else {
            // invalid command exception
          }
        }
      });

      return resultCommand;
    }
    return null;
  },
};

export default getters;
