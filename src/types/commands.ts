import crc from './crc';

enum _webserial_command_types {
  CORE = 0x00,
  TABLES = 0x10,
  EFI_CONFIG = 0x20,
  DTC = 0x30,
  FW = 0xf0,
}

enum _webserial_command {
  // Core
  CORE_DEBUG = 0x00, // For debug messages. Not an actual command that we handle.
  CORE_PING = 0x01,
  CORE_STATUS_METADATA = 0x04,
  CORE_STATUS = 0x05,

  // Tables
  TABLES_GET_METADATA = 0x10,
  TABLES_GET = 0x11,
  TABLES_PUT = 0x12,
  //    TABLES_RESET          = 0x13, (unused)
  TABLES_WRITE = 0x14,

  // EFI_CONFIG
  EFI_CONFIG_GET = 0x20,
  EFI_CONFIG_WRITE = 0x21,
  EFI_CONFIG_RESET = 0x22,

  // FW
  FW_BOOTLOADER = 0xf1,
}

enum _webserial_command_status {
  CMD_ERR = 0b00000000,
  CMD_OK = 0b10000000,
}

enum _webserial_error_code {
  GENERIC_UNKNOWN_CMD = 0x7f,
  // Core
  //.. (none)

  // Tables
  TABLES_INVALID_TABLE = 0x01,
  TABLES_CRC_ERROR = 0x02,
  TABLES_WRITE_FAIL = 0x03,

  // FW
  FW_REBOOT_UNSAFE = 0x01,
}

export interface IUSBCommand {
  protocol: number;
  command: number | _webserial_command_types;
  status: number;
  payload: Uint8Array;
  checksum: string;
}

export const mockUSBCommand = (command = 1, status: number, payload: Uint8Array): IUSBCommand => {
  const protocol = 1;
  const checksum = ('0000' + crc([command, status, ...payload].slice(0, 26)).toString(16)).substr(-4);

  const filledPayload = new Uint8Array([...payload, ...Array(126).fill(0xfa).slice(0, payload.length)]);

  return {
    protocol,
    command,
    status,
    payload: filledPayload,
    checksum,
  };
};
