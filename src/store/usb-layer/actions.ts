import { IUSBCommand } from 'src/types/commands';
import { ActionTree } from 'vuex';
import { StateInterface } from '../';
import crc, { buf2hex } from '../../types/crc';
import { UsbLayerInterface } from './state';

const actions: ActionTree<UsbLayerInterface, StateInterface> = {
  connected({ commit }, commandPayload) {
    const type = String(commandPayload[0]);
    const major = String((commandPayload[1] << 8) + commandPayload[2]);
    const minor = String((commandPayload[3] << 8) + commandPayload[4]);
    const rev = String((commandPayload[5] << 8) + commandPayload[6]);

    const typeString =
      (type === '0' && 'OpenEFI') || (type === '1' && 'uEFI') || (type === '2' && 'DashDash') || 'Unknow';

    console.log(`${typeString} Connected: \n` + `Major: ${major} \n` + `Minor: ${minor} \n` + `Rev: ${rev} \n`);
    void commit('setPaired', { major, minor, rev, type });
    void commit('toogleConnect', false);
  },
  /**
   * @deprecated use sendCommand
   */
  sendMessage({ state }, { command, status, payload }) {
    let rawData = Array(128).fill(0x0);

    rawData = [1, status, command, ...payload].slice(0, 128);
    const calcrc = crc(rawData.slice(0, 126));

    rawData[126] = (calcrc >> 8) & 0xff;
    rawData[127] = calcrc & 0xff;

    const data = new Uint8Array(rawData);

    console.debug(
      `%c Frame enviado\nProtocolo: ${1}\nComando: ${command}\nStatus: ${status}\nPayload: ${payload}\nChecksum: ${calcrc}`,
      'color: yellow;'
    );

    void state.writer?.write(data);
  },

  /**
   * @deprecated use removeCommand
   */
  removeMesage({ state, commit }, command: IUSBCommand) {
    if (!command) return;
    const filteredCommands = state.pending_commands?.filter((comm) => {
      return comm.checksum !== command.checksum;
    });
    commit('setCommands', filteredCommands);
  },
  sendCommand({ state }, { protocol, command, status, code, payload }) {
    const _payload = payload ? [...payload, ...Array(122).fill(0x0)].slice(0, 122) : Array(122).fill(0x0);
    const _protocol = protocol ?? 1;

    let rawData = Array(128).fill(0x0);

    rawData = [_protocol, status, code, command, ..._payload].slice(0, 128);

    const calcrc = crc(rawData.slice(0, 126));

    rawData[126] = (calcrc >> 8) & 0xff;
    rawData[127] = calcrc & 0xff;

    const data = new Uint8Array(rawData);
    console.debug(
      `%cFrame enviado [v2]
-- Protocolo: 0x${_protocol.toString(16)}
-- Comando: 0x${command?.toString(16) ?? 0}
-- Status: 0x${status?.toString(16) ?? 0}
-- Code: 0x${code?.toString(16) ?? 0}
-- Checksum: ${calcrc}`,
      'color: orange;'
    );

    void state.writer?.write(data);
  },
  removeCommand({ state, commit }, command: IUSBCommand) {
    if (!command) return;
    const filteredCommands = state.pending_commands?.filter((comm) => {
      return comm.uuid !== command.uuid;
    });
    commit('setCommands', filteredCommands);
  },
  reciveFrame({ commit }, data) {
    const frame = new Uint8Array(data);

    const protocol = frame[0];
    const status = frame[1];
    const code = frame[2];
    const command = frame[3];

    const payload = frame.slice(4, 126);
    const checksum = buf2hex(frame.slice(126, 128).buffer);

    // Todo este bardo para comparar los dos crc como string...
    const localcrc = ('0000' + crc(frame.slice(0, 126)).toString(16)).slice(-4);

    const newCommand: IUSBCommand = {
      protocol,
      command,
      status,
      code,
      payload,
      checksum,
      uuid: crypto.randomUUID(),
    };

    console.debug(
      `%cFrame recibido [v2]
-- Protocolo: 0x${protocol.toString(16)}
-- Comando: 0x${command?.toString(16) ?? 0}
-- Status: 0x${status?.toString(16) ?? 0}
-- Code: 0x${code?.toString(16) ?? 0}
-- Checksum: ${checksum}`,
      'color: darkTurquoise;'
    );

    if (checksum != localcrc) {
      console.warn('Checksums no coinciden! \n' + 'Local: ' + localcrc + '\nEFI: ' + checksum);
      commit('addCommand', newCommand);
    } else {
      commit('addCommand', newCommand);
    }
  },
  reset({ commit }) {
    commit('setDisconnected');
  },
  setWriter({ commit }, serialWriter: WritableStreamDefaultWriter<Uint8Array>) {
    commit('setConnection', serialWriter);
  },

  putCommand({ commit }, payload: IUSBCommand) {
    commit('addCommand', payload);
  },
  initConnection({ commit }, payload) {
    commit('toogleConnect', payload);
  },
};

export default actions;
