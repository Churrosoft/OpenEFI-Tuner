// eslint-disable-next-line @typescript-eslint/no-unused-vars
import mocks from './mocks';
export interface IUSBCommand {
  protocol: number;
  command: number;
  /*   subcommand: number; */
  payload: Uint8Array;
  checksum: string; // hace falta?
}
export interface UsbLayerInterface {
  connecting: boolean;
  usbd: null | unknown;
  writer: null | WritableStreamDefaultWriter<Uint8Array>;
  connected: boolean;
  paired: boolean;
  showLiveTunningBanner: boolean;
  firmware_ver: {
    type: string | null;
    major: string | null;
    minor: string | null;
    rev: string | null;
  };
  pending_commands: Array<IUSBCommand> | null;
}

type errorCommands = 91 | 92 | 93;

// 20 => get table metadata, 21 => get X table, 22 => response get X table,
// 23 => reset X table, 24 => write X table , 25 => response write x table
// 26 => begin data chunck , 27 => end data chunck (podrian ser un solo comando?)
type tableCommands = 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27;

// 30 => get all, 31 => delete X code, 32 => delete all
type dtcCommands = 30 | 31 | 32;

export type USBCommands =
  | 100
  | 200
  | errorCommands
  | tableCommands
  | dtcCommands;

export function _arrayBufferToBase64(buffer: Uint8Array) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  try {
    return window.atob(binary);
  } catch (error) {
    return new TextDecoder().decode(buffer).split('\n')[0];
  }
}

export const findPayloadEnd = (payload: IUSBCommand['payload']) => {
  const firstIndex = payload.indexOf(0xfa);

  if (firstIndex === 125 || firstIndex === 126) return firstIndex;

  if (firstIndex !== -1 && payload[firstIndex + 1] === 0xfa) {
    return firstIndex;
  }
};

export const createUSBCommand = (
  command: USBCommands,
  payload: Uint8Array,
  checksum: string
): IUSBCommand => {
  const protocol = 1;
  /*   const subcommand = 0;

  const checksum = (
    '0000' + crc([command, subcommand, ...payload].slice(0, 126)).toString(16)
  ).substr(-4); */

  const filledPayload = new Uint8Array([
    ...payload,
    ...Array(126).fill(0xfa).slice(0, payload.length),
  ]);

  return {
    protocol,
    command,
    /*     subcommand, */
    payload: filledPayload,
    checksum,
  };
};

function state(): UsbLayerInterface {
  return {
    connecting: false,
    usbd: null,
    writer: null,

    connected: false, // Cuando ya nos conectamos por serial
    paired: false, // Cuando le OpenEFI ya nos respondio

    showLiveTunningBanner: true,

    firmware_ver: { type: null, major: null, minor: null, rev: null },
    pending_commands: [...mocks],
  };
}

export default state;
