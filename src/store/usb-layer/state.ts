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
}

function state(): UsbLayerInterface {
  return {
    toogle_menu: false,
    usbd: null,
    writer: null,

    connected: false, // Cuando ya nos conectamos por serial
    paired: false, // Cuando le OpenEFI ya nos respondio

    firmware_ver: { major: null, minor: null, rev: null },
  };
}

export default state;
