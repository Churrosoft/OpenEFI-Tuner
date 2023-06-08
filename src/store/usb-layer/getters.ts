import { IUSBCommand, SerialCode, SerialCommand, SerialStatus } from 'src/types/commands';
import { GetterTree } from 'vuex';
import { StateInterface } from '../';
import { UsbLayerInterface } from './state';

const getters: GetterTree<UsbLayerInterface, StateInterface> = {
  getCommand: (state) => (command: SerialCommand, status: SerialStatus, code: SerialCode) => {
    if (state.pending_commands) {
      for (let index = 0; index < state.pending_commands.length; index++) {
        const element = state.pending_commands[index];

        if (element.command === command && status === undefined && code === undefined) {
          return element;
        }

        if (element.command === command && status === undefined && element.code === code) {
          return element;
        }

        if (element.command === command && element.status === status && code === undefined) {
          return element;
        }
        if (element.command === command && element.status === status && element.code === code) {
          return element;
        }
      }
    }
    return null;
  },
  getGroupedCommandsV2:
    (state) => (cmdArray: Array<{ command: SerialCommand; status: SerialStatus; code: SerialCode }>) => {
      const resultCommands: Array<IUSBCommand> = [];

      if (state.pending_commands) {
        for (let index = 0; index < state.pending_commands.length; index++) {
          const element = state.pending_commands[index];

          if (
            cmdArray.some(
              (cmd) => element.command === cmd.command && cmd.status === undefined && cmd.code === undefined
            )
          ) {
            resultCommands.push(element);
          }

          if (
            cmdArray.some(
              (cmd) => element.command === cmd.command && cmd.status === undefined && element.code === cmd.code
            )
          ) {
            resultCommands.push(element);
          }

          if (
            cmdArray.some(
              (cmd) => element.command === cmd.command && element.status === cmd.status && cmd.code === undefined
            )
          ) {
            resultCommands.push(element);
          }
          if (
            cmdArray.some(
              (cmd) => element.command === cmd.command && element.status === cmd.status && element.code === cmd.code
            )
          ) {
            resultCommands.push(element);
          }
        }
      }

      if (!resultCommands.length) return null;

      return resultCommands;
    },
  getCommandArr: (state) => (commandType: SerialCommand, _status: SerialStatus) => {
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

  getGroupedCommands: (state) => (commandsType: Array<{ command: SerialCommand; status: SerialStatus }>) => {
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
