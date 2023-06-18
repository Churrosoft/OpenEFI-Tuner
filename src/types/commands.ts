import crc from './crc';
import { Store } from 'vuex';
import { StateInterface } from 'src/store';

export enum SerialCommand {
  Core = 0x00,
  CorePing = 0x01,

  // Tables:
  Table = 0x10,
  TableGetMetaData = 0x11,
  TableGet = 0x12,
  TablePut = 0x13,
  TableUpload = 0x14,
  TableClear = 0x19,

  // Engine configuration:
  EngineCfgGet = 0x61,

  // PMIC:
  Pmic = 0x80,
  PmicFastStatus = 0x81,
  PmicInjectionStatus = 0x82,
  PmicIgnitionStatus = 0x83,
  Debug = 0x90,
}

// 127 pa abajo siempre
export enum SerialStatus {
  Error = 0b0000_0000,
  Ok = 0b0100_0000,
  UploadOk = 0x7c,
  DataChunk = 0x7d,
  DataChunkEnd = 0x7e,
}

// 127 pa abajo (se podrian repetir los especificos por comando, no es el discriminador)
export enum SerialCode {
  None = 0x00,

  FWRequestBootloader = 0x01,
  FWRebootUnsafe = 0x03,

  ParseError = 0x5f,
  UnknownCmd = 0x7f,

  // Tables
  UnknownTable = 51,
  TableNotLoaded = 50,
  TableCrcError = 52,

  // PMIC:
  RequestFastStatus = 60,
  RequestIgnitionStatus = 61,
  RequestInjectionStatus = 62,
}

export interface IUSBCommand {
  protocol: number;
  command: number;
  status: number;
  code?: number; // optional for legacy code only
  payload: Uint8Array;
  checksum: string;
  uuid?: string;
}

export const getUSBCommand = (
  getters: Store<StateInterface>['getters'],
  command: SerialCommand,
  status?: SerialStatus,
  code?: SerialCode
) => {
  return getters['UsbLayer/getCommand'](command, status, code) as IUSBCommand | null;
};

export const getGroupedUSBCommands = (
  getters: Store<StateInterface>['getters'],
  cmdArray: Array<{
    command: SerialCommand;
    status?: SerialStatus;
    code?: SerialCode;
  }>
) => {
  return getters['UsbLayer/getGroupedCommandsV2'](cmdArray) as Array<IUSBCommand> | null;
};

export const sendUSBCommand = (
  dispatch: Store<StateInterface>['dispatch'],
  command: SerialCommand,
  status?: SerialStatus,
  code?: SerialCode,
  payload?: Uint8Array
) => {
  return dispatch('UsbLayer/sendCommand', { command, status, code, payload }, { root: true });
};

export const removeUSBCommand = (dispatch: Store<StateInterface>['dispatch'], command: IUSBCommand) => {
  return dispatch('UsbLayer/removeCommand', command, { root: true });
};

export const mockUSBCommand = (command = 1, status: number, payload: Uint8Array): IUSBCommand => {
  const protocol = 1;
  const checksum = ('0000' + crc([command, status, ...payload].slice(0, 26)).toString(16)).slice(-4);

  const filledPayload = new Uint8Array([...payload, ...Array(126).fill(0xfa).slice(0, payload.length)]);

  return {
    protocol,
    command,
    status,
    payload: filledPayload,
    checksum,
  };
};

export const createUSBCommand = (
  command: SerialCommand,
  status: SerialStatus,
  code: SerialCode,
  payload?: Uint8Array,
  protocol?: number
): IUSBCommand => {
  const _payload = payload ?? Array(126).fill(0x0);
  const _protocol = protocol ?? 1;
  const _status = status | code;

  const checksum = ('0000' + crc([command, status, ..._payload].slice(0, 26)).toString(16)).slice(-4);

  const filledPayload = new Uint8Array([..._payload, ...Array(126).fill(0xfa).slice(0, _payload.length)]);

  return {
    protocol: _protocol,
    command,
    status: _status,
    payload: filledPayload,
    checksum,
  };
};
