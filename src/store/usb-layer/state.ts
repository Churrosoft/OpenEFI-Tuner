import crc from '../crc';

export interface IUSBCommand {
  protocol: number;
  command: number;
  subcommand: number;
  payload: Uint8Array;
  checksum: string; // hace falta?
}
export interface UsbLayerInterface {
  toogle_menu: boolean;
  usbd: null | unknown;
  writer: null | unknown;
  connected: boolean;
  paired: boolean;
  firmware_ver: {
    major: string | null;
    minor: string | null;
    rev: string | null;
  };
  pending_commands: Array<IUSBCommand> | null;
}

type errorCommands = 91 | 92 | 93;

// 20 => get table metadata, 21 => get X table, 22 => write X table
type tableCommands = 20 | 21 | 22;

// 30 => get all, 31 => delete X code, 32 => delete all
type dtcCommands = 30 | 31 | 32;

export type USBCommands = 100 | 200 | errorCommands | tableCommands | dtcCommands;

export const mockUSBCommand = (
  command = 1,
  subcommand = 0,
  payload = new Uint8Array()
): IUSBCommand => {
  const protocol = 1;
  const checksum = (
    '0000' + crc([command, subcommand, ...payload].slice(0, 126)).toString(16)
  ).substr(-4);

  return {
    protocol,
    command,
    subcommand,
    payload,
    checksum,
  };
};

// NOTE: all text in b64
const mockedDTC = [
  //P06010
  mockUSBCommand(3, 0, new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4d, 0x44, 0x45, 0x3d])),
  //P060A // 55 44 41 32 4d 45 45 3d
  mockUSBCommand(3, 0, new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4d, 0x45, 0x45, 0x3d])),
  //P0632 // 55 44 41 32 4d 7a 49 4b
  mockUSBCommand(3, 0, new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4d, 0x7a, 0x49, 0x4b])),
  //P0648 // 55 44 41 32 4e 44 67 3d
  mockUSBCommand(3, 0, new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4e, 0x44, 0x67, 0x3d])),
  //P06420 // 55 44 41 32 4e 44 49 3d
  mockUSBCommand(3, 0, new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4e, 0x44, 0x49, 0x3d])),
];

function state(): UsbLayerInterface {
  return {
    toogle_menu: false,
    usbd: null,
    writer: null,

    connected: false, // Cuando ya nos conectamos por serial
    paired: false, // Cuando le OpenEFI ya nos respondio

    firmware_ver: { major: null, minor: null, rev: null },
    pending_commands: [mockUSBCommand(1, 2, new Uint8Array([0, 0, 0, 0, 0])), ...mockedDTC],
  };
}

export default state;
