import { IUSBCommand } from 'src/types/commands';
import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { USBCommands, UsbLayerInterface } from './state';

const getters: GetterTree<UsbLayerInterface, StateInterface> = {
  getCommand: (state) => (commandType: USBCommands, _status: number) => {
    // si me dejo de hinchar las pelotas y uso todo en string directamente?
    const command = String(commandType); /* .slice(1) */
    if (state.pending_commands) {
      let resultCommand: IUSBCommand | null = null;
      state.pending_commands.map((_comm) => {
        if (String(_comm.command) === command && resultCommand === null && !_status) {
          resultCommand = _comm;
        }
        if (String(_comm.command) === command && resultCommand === null && _comm.status === _status) {
          resultCommand = _comm;
        }
      });

      return resultCommand;
    }
    return null;
  },

  getCommandArr: (state) => (commandType: USBCommands, _status: number) => {
    const command = String(commandType).slice(1);

    if (state.pending_commands) {
      const resultCommand: Array<IUSBCommand> = [];

      state.pending_commands.map((_comm) => {
        if (String(_comm.command) === command && !_status) {
          resultCommand.push(_comm);
        }

        if (String(_comm.command) === command && _comm.status === _status) {
          resultCommand.push(_comm);
        }
      });

      return resultCommand.length ? resultCommand : null;
    }
    return null;
  },

  getGroupedCommands: (state) => (commandsType: Array<{ command: USBCommands; status: number }>) => {
    if (state.pending_commands?.length) {
      const resultCommands = [] as Array<IUSBCommand>;
      state.pending_commands.map((_comm) => {
        if (commandsType.some((el) => el.command && _comm.command && el.status === _comm.status)) {
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
