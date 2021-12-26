import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { IUSBCommand, USBCommands, UsbLayerInterface } from './state';

const getters: GetterTree<UsbLayerInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
  getCommand: (state) => (commandType: USBCommands) => {
    // si me dejo de hinchar las pelotas y uso todo en string directamente?
    const command = String(commandType).slice(1, 2);
    const subcommand = String(commandType).slice(2, 3);

    if (state.pending_commands) {
      let resultCommand: IUSBCommand | null = null;
      state.pending_commands.map((_comm) => {
        if (String(_comm.command) === command && resultCommand === null) {
          if (subcommand && String(_comm.subcommand) === subcommand) {
            resultCommand = _comm;
          } else if (!subcommand) {
            // valid command without subcommand
            resultCommand = _comm;
          } else {
            /* console.log('invalid command');
            console.log(_comm); */
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
