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

export type USBCommands = 100 | 200 | errorCommands | tableCommands;

function state(): UsbLayerInterface {
  return {
    toogle_menu: false,
    usbd: null,
    writer: null,

    connected: false, // Cuando ya nos conectamos por serial
    paired: false, // Cuando le OpenEFI ya nos respondio

    firmware_ver: { major: null, minor: null, rev: null },
    pending_commands: null,
  };
}

export default state;
