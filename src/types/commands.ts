import crc from './crc';

export enum SerialCommand {
  Core = 0x00,
  Table = 0x10,
  Pmic = 0x80,
  Debug = 0x90,
}

// 127 pa ashiba
export enum SerialStatus {
  Error = 0b0000_0000,
  Ok = 0b1000_0000,
  DataChunk = 0b1110_0000,
  DataChunkEnd = 0b1111_0000,
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
  RequestFastStatus = 0x01,
  RequestIgnitionStatus = 0x02,
  RequestInjectionStatus = 0x03,
}

export interface IUSBCommand {
  protocol: number;
  command: number;
  status: number;
  code?: number; // optional for legacy code only
  payload: Uint8Array;
  checksum: string;
}

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
