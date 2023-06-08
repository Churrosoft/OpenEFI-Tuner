import { IUSBCommand } from 'src/types/commands';
// import mocks from './mocks';

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

function state(): UsbLayerInterface {
  return {
    connecting: false,
    usbd: null,
    writer: null,

    connected: false, // Cuando ya nos conectamos por serial
    paired: false, // Cuando le OpenEFI ya nos respondio

    showLiveTunningBanner: true,

    firmware_ver: { type: null, major: null, minor: null, rev: null },
    pending_commands: null,
  };
}

export default state;
