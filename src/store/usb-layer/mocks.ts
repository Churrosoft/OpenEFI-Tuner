import crc from '../crc';

import { IUSBCommand } from './state';

export const mockUSBCommand = (
  command = 1,
  /* subcommand = 0, */ payload: Uint8Array
): IUSBCommand => {
  const protocol = 1;
  const checksum = (
    '0000' +
    crc([command, /* subcommand,  */ ...payload].slice(0, 26)).toString(16)
  ).substr(-4);

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

// NOTE: all text in b64
const mockedDTC = [
  //P06010
  mockUSBCommand(
    40,
    new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4d, 0x44, 0x45, 0x3d])
  ),
  //P060A // 55 44 41 32 4d 45 45 3d
  mockUSBCommand(
    40,
    new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4d, 0x45, 0x45, 0x3d])
  ),
  //P0632 // 55 44 41 32 4d 7a 49 4b
  mockUSBCommand(
    40,
    new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4d, 0x7a, 0x49, 0x4b])
  ),
  //P0648 // 55 44 41 32 4e 44 67 3d
  mockUSBCommand(
    40,
    new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4e, 0x44, 0x67, 0x3d])
  ),
  //P06426 // 55 44 41 32 4e 44 49 3d
  mockUSBCommand(
    40,
    new Uint8Array([0x55, 0x44, 0x41, 0x32, 0x4e, 0x44, 0x49, 0x3d])
  ),
];

// NOTE: 1 command => 1 row, all values * 100, 16b int signed
const mockedIgnition = [
  // [ 00 ]  [550 ] [ 950] [1260] [1650] [2260] [2800] [3400] [3900] [4400] [4900] [5400] [7260]
  mockUSBCommand(
    26,
    new Uint8Array([
      0x0, 0x0, 0x0, 0x0, 0x60, 0xea, 0x0, 0x0, 0xf8, 0x24, 0x1, 0x0, 0xb0,
      0xad, 0x1, 0x0, 0xe0, 0x22, 0x2, 0x0, 0x10, 0x98, 0x2, 0x0, 0x40, 0xd,
      0x3, 0x0, 0x70, 0x82, 0x3, 0x0, 0xa0, 0xf7, 0x3, 0x0, 0xd0, 0x6c, 0x4,
      0x0, 0x0, 0xe2, 0x4, 0x0, 0x30, 0x57, 0x5, 0x0, 0x60, 0xcc, 0x5, 0x0,
      0x90, 0x41, 0x6, 0x0, 0xc0, 0xb6, 0x6, 0x0, 0xf0, 0x2b, 0x7, 0x0, 0xb0,
      0x71, 0xb, 0x0,
    ])
  ),
  // [ 100]  (13.5) (13.0) (14.0) (14.0) (18.6) (24.0) (31.0) (33.0) (33.2) (33.4) (33.6) (34.3)
  mockUSBCommand(
    26,
    new Uint8Array([
      0xc4, 0x9, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x4a, 0x6,
      0x0, 0x0, 0x8a, 0x7, 0x0, 0x0, 0xd4, 0x8, 0x0, 0x0, 0x1e, 0xa, 0x0, 0x0,
      0x5e, 0xb, 0x0, 0x0, 0xa8, 0xc, 0x0, 0x0, 0xf2, 0xd, 0x0, 0x0, 0x60, 0xe,
      0x0, 0x0, 0x60, 0xe, 0x0, 0x0, 0x60, 0xe, 0x0, 0x0, 0x60, 0xe, 0x0, 0x0,
      0x60, 0xe, 0x0, 0x0, 0x60, 0xe, 0x0, 0x0, 0x60, 0xe, 0x0, 0x0,
    ])
  ),
  // [ 90 ]  (13.8) (13.3) (14.0) (14.2) (17.4) (24.5) (31.2) (33.3) (33.6) (33.8) (34.1) (34.9)
  mockUSBCommand(
    26,
    new Uint8Array([
      0xb8, 0xb, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x36, 0x6,
      0x0, 0x0, 0x76, 0x7, 0x0, 0x0, 0xb6, 0x8, 0x0, 0x0, 0xf6, 0x9, 0x0, 0x0,
      0x40, 0xb, 0x0, 0x0, 0x80, 0xc, 0x0, 0x0, 0xc0, 0xd, 0x0, 0x0, 0x2e, 0xe,
      0x0, 0x0, 0x2e, 0xe, 0x0, 0x0, 0x2e, 0xe, 0x0, 0x0, 0x2e, 0xe, 0x0, 0x0,
      0x2e, 0xe, 0x0, 0x0, 0x2e, 0xe, 0x0, 0x0, 0x2e, 0xe, 0x0, 0x0,
    ])
  ),
  // [ 80 ]  (14.2) (13.6) (13.9) (14.4) (17.8) (25.0) (31.5) (33.7) (34.0) (34.2) (34.5) (35.5)
  mockUSBCommand(
    26,
    new Uint8Array([
      0xac, 0xd, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x22, 0x6,
      0x0, 0x0, 0x62, 0x7, 0x0, 0x0, 0x98, 0x8, 0x0, 0x0, 0xd8, 0x9, 0x0, 0x0,
      0x18, 0xb, 0x0, 0x0, 0x58, 0xc, 0x0, 0x0, 0x98, 0xd, 0x0, 0x0, 0x6, 0xe,
      0x0, 0x0, 0x6, 0xe, 0x0, 0x0, 0x6, 0xe, 0x0, 0x0, 0x6, 0xe, 0x0, 0x0, 0x6,
      0xe, 0x0, 0x0, 0x6, 0xe, 0x0, 0x0, 0x6, 0xe, 0x0, 0x0,
    ])
  ),
  // [ 70 ]  (14.5) (13.9) (13.9) (14.6) (18.3) (25.5) (31.7) (34.0) (34.4) (34.7) (35.0) (36.1)
  mockUSBCommand(
    26,
    new Uint8Array([
      0xa0, 0xf, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0xe, 0x6,
      0x0, 0x0, 0x44, 0x7, 0x0, 0x0, 0x84, 0x8, 0x0, 0x0, 0xba, 0x9, 0x0, 0x0,
      0xfa, 0xa, 0x0, 0x0, 0x30, 0xc, 0x0, 0x0, 0x70, 0xd, 0x0, 0x0, 0xd4, 0xd,
      0x0, 0x0, 0xd4, 0xd, 0x0, 0x0, 0xd4, 0xd, 0x0, 0x0, 0xd4, 0xd, 0x0, 0x0,
      0xd4, 0xd, 0x0, 0x0, 0xd4, 0xd, 0x0, 0x0, 0xd4, 0xd, 0x0, 0x0,
    ])
  ),
  // [ 60 ]  (14.9) (14.2) (13.8) (14.8) (18.7) (25.9) (32.0) (34.4) (34.7) (35.1) (35.4) (36.7)
  mockUSBCommand(
    26,
    new Uint8Array([
      0x94, 0x11, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0xfa, 0x5,
      0x0, 0x0, 0x30, 0x7, 0x0, 0x0, 0x66, 0x8, 0x0, 0x0, 0x9c, 0x9, 0x0, 0x0,
      0xd2, 0xa, 0x0, 0x0, 0x8, 0xc, 0x0, 0x0, 0x3e, 0xd, 0x0, 0x0, 0xac, 0xd,
      0x0, 0x0, 0xac, 0xd, 0x0, 0x0, 0xac, 0xd, 0x0, 0x0, 0xac, 0xd, 0x0, 0x0,
      0xac, 0xd, 0x0, 0x0, 0xac, 0xd, 0x0, 0x0, 0xac, 0xd, 0x0, 0x0,
    ])
  ),
  //[ 50 ]  (15.3) (14.5) (13.8) (15.0) (19.1) (26.4) (32.2) (34.4) (35.1) (35.5) (35.9) (37.3)
  mockUSBCommand(
    26,
    new Uint8Array([
      0x88, 0x13, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0xe6, 0x5,
      0x0, 0x0, 0x12, 0x7, 0x0, 0x0, 0x48, 0x8, 0x0, 0x0, 0x7e, 0x9, 0x0, 0x0,
      0xaa, 0xa, 0x0, 0x0, 0xe0, 0xb, 0x0, 0x0, 0x16, 0xd, 0x0, 0x0, 0x7a, 0xd,
      0x0, 0x0, 0x7a, 0xd, 0x0, 0x0, 0x7a, 0xd, 0x0, 0x0, 0x7a, 0xd, 0x0, 0x0,
      0x7a, 0xd, 0x0, 0x0, 0x7a, 0xd, 0x0, 0x0, 0x7a, 0xd, 0x0, 0x0,
    ])
  ),
  //[ 40 ]  (15.7) (14.8) (13.8) (15.2) (19.5) (26.9) (32.5) (34.4) (35.5) (35.9) (36.4) (37.9)
  mockUSBCommand(
    26,
    new Uint8Array([
      0x7c, 0x15, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0xd2, 0x5,
      0x0, 0x0, 0xfe, 0x6, 0x0, 0x0, 0x2a, 0x8, 0x0, 0x0, 0x60, 0x9, 0x0, 0x0,
      0x8c, 0xa, 0x0, 0x0, 0xb8, 0xb, 0x0, 0x0, 0xe4, 0xc, 0x0, 0x0, 0x52, 0xd,
      0x0, 0x0, 0x52, 0xd, 0x0, 0x0, 0x52, 0xd, 0x0, 0x0, 0x52, 0xd, 0x0, 0x0,
      0x52, 0xd, 0x0, 0x0, 0x52, 0xd, 0x0, 0x0, 0x52, 0xd, 0x0, 0x0,
    ])
  ),
  // [ 30 ]  (16.1) (15.2) (14.4) (15.4) (19.9) (27.4) (32.7) (34.4) (35.9) (36.4) (36.8) (38.5)
  mockUSBCommand(
    26,
    new Uint8Array([
      0x70, 0x17, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0xbe, 0x5,
      0x0, 0x0, 0xea, 0x6, 0x0, 0x0, 0x16, 0x8, 0x0, 0x0, 0x38, 0x9, 0x0, 0x0,
      0x64, 0xa, 0x0, 0x0, 0x90, 0xb, 0x0, 0x0, 0xbc, 0xc, 0x0, 0x0, 0x26, 0xd,
      0x0, 0x0, 0x26, 0xd, 0x0, 0x0, 0x26, 0xd, 0x0, 0x0, 0x26, 0xd, 0x0, 0x0,
      0x26, 0xd, 0x0, 0x0, 0x26, 0xd, 0x0, 0x0, 0x26, 0xd, 0x0, 0x0,
    ])
  ),
  // [ 26 ]  (16.4) (15.5) (15.1) (15.7) (26.4) (27.4) (34.9) (34.4) (36.3) (36.8) (37.3) (39.1)
  mockUSBCommand(
    26,
    new Uint8Array([
      0xc8, 0x19, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0xa0, 0x5,
      0x0, 0x0, 0xcc, 0x6, 0x0, 0x0, 0xee, 0x7, 0x0, 0x0, 0x1a, 0x9, 0x0, 0x0,
      0x3c, 0xa, 0x0, 0x0, 0x5e, 0xb, 0x0, 0x0, 0x8a, 0xc, 0x0, 0x0, 0xee, 0xc,
      0x0, 0x0, 0xee, 0xc, 0x0, 0x0, 0xee, 0xc, 0x0, 0x0, 0xee, 0xc, 0x0, 0x0,
      0xee, 0xc, 0x0, 0x0, 0xee, 0xc, 0x0, 0x0, 0xee, 0xc, 0x0, 0x0,
    ])
  ),
  // [ 15 ]  (16.6) (15.7) (15.4) (15.8) (26.6) (28.3) (36.0) (34.4) (34.7) (37.0) (37.5) (39.4)
  mockUSBCommand(
    26,
    new Uint8Array([
      0xbc, 0x1b, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x96, 0x5,
      0x0, 0x0, 0xb8, 0x6, 0x0, 0x0, 0xd0, 0x7, 0x0, 0x0, 0xf2, 0x8, 0x0, 0x0,
      0x14, 0xa, 0x0, 0x0, 0x36, 0xb, 0x0, 0x0, 0x58, 0xc, 0x0, 0x0, 0xbc, 0xc,
      0x0, 0x0, 0xbc, 0xc, 0x0, 0x0, 0xbc, 0xc, 0x0, 0x0, 0xbc, 0xc, 0x0, 0x0,
      0xbc, 0xc, 0x0, 0x0, 0xbc, 0xc, 0x0, 0x0, 0xbc, 0xc, 0x0, 0x0,
    ])
  ),
  // [ 10 ]  (16.8) (16.3) (15.7) (15.9) (26.8) (28.4) (36.0) (34.4) (34.7) (37.2) (37.8) (39.7)
  mockUSBCommand(
    26,
    new Uint8Array([
      0xb0, 0x1d, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x82, 0x5,
      0x0, 0x0, 0x9a, 0x6, 0x0, 0x0, 0xbc, 0x7, 0x0, 0x0, 0xd4, 0x8, 0x0, 0x0,
      0xf6, 0x9, 0x0, 0x0, 0xe, 0xb, 0x0, 0x0, 0x30, 0xc, 0x0, 0x0, 0x94, 0xc,
      0x0, 0x0, 0x94, 0xc, 0x0, 0x0, 0x94, 0xc, 0x0, 0x0, 0x94, 0xc, 0x0, 0x0,
      0x94, 0xc, 0x0, 0x0, 0x94, 0xc, 0x0, 0x0, 0x94, 0xc, 0x0, 0x0,
    ])
  ),
  // [  5 ]  (17.0) (16.5) (16.0) (16.0) (21.0) (28.5) (36.0) (34.4) (34.7) (37.4) (38.0) (40.0)
  mockUSBCommand(
    26,
    new Uint8Array([
      0xa4, 0x1f, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x6e, 0x5,
      0x0, 0x0, 0x86, 0x6, 0x0, 0x0, 0x9e, 0x7, 0x0, 0x0, 0xb6, 0x8, 0x0, 0x0,
      0xce, 0x9, 0x0, 0x0, 0xf0, 0xa, 0x0, 0x0, 0x8, 0xc, 0x0, 0x0, 0x62, 0xc,
      0x0, 0x0, 0x62, 0xc, 0x0, 0x0, 0x62, 0xc, 0x0, 0x0, 0x62, 0xc, 0x0, 0x0,
      0x62, 0xc, 0x0, 0x0, 0x62, 0xc, 0x0, 0x0, 0x62, 0xc, 0x0, 0x0,
    ])
  ),
  // [  5 ]  (17.0) (16.5) (16.0) (16.0) (21.0) (28.5) (36.0) (34.4) (34.7) (37.4) (38.0) (40.0)
  mockUSBCommand(
    26,
    new Uint8Array([
      0x98, 0x21, 0x0, 0x0, 0x14, 0x5, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x5a, 0x5,
      0x0, 0x0, 0x68, 0x6, 0x0, 0x0, 0x80, 0x7, 0x0, 0x0, 0x98, 0x8, 0x0, 0x0,
      0xb0, 0x9, 0x0, 0x0, 0xc8, 0xa, 0x0, 0x0, 0xd6, 0xb, 0x0, 0x0, 0x3a, 0xc,
      0x0, 0x0, 0x3a, 0xc, 0x0, 0x0, 0x3a, 0xc, 0x0, 0x0, 0x3a, 0xc, 0x0, 0x0,
      0x3a, 0xc, 0x0, 0x0, 0x3a, 0xc, 0x0, 0x0, 0x3a, 0xc, 0x0, 0x0,
    ])
  ),
  // [  5 ]  (17.0) (16.5) (16.0) (16.0) (21.0) (28.5) (36.0) (34.4) (34.7) (37.4) (38.0) (40.0)
  mockUSBCommand(
    26,
    new Uint8Array([
      0x8c, 0x23, 0x0, 0x0, 0xf4, 0x1, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x46, 0x5,
      0x0, 0x0, 0x54, 0x6, 0x0, 0x0, 0x62, 0x7, 0x0, 0x0, 0x7a, 0x8, 0x0, 0x0,
      0x88, 0x9, 0x0, 0x0, 0xa0, 0xa, 0x0, 0x0, 0xae, 0xb, 0x0, 0x0, 0x8, 0xc,
      0x0, 0x0, 0x8, 0xc, 0x0, 0x0, 0x8, 0xc, 0x0, 0x0, 0x8, 0xc, 0x0, 0x0, 0x8,
      0xc, 0x0, 0x0, 0x8, 0xc, 0x0, 0x0, 0x8, 0xc, 0x0, 0x0,
    ])
  ),
  // [  5 ]  (17.0) (16.5) (16.0) (16.0) (21.0) (28.5) (36.0) (34.4) (34.7) (37.4) (38.0) (40.0)
  mockUSBCommand(
    26,
    new Uint8Array([
      0x80, 0x25, 0x0, 0x0, 0xf4, 0x1, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x32, 0x5,
      0x0, 0x0, 0x40, 0x6, 0x0, 0x0, 0x4e, 0x7, 0x0, 0x0, 0x5c, 0x8, 0x0, 0x0,
      0x6a, 0x9, 0x0, 0x0, 0x78, 0xa, 0x0, 0x0, 0x86, 0xb, 0x0, 0x0, 0xe0, 0xb,
      0x0, 0x0, 0xe0, 0xb, 0x0, 0x0, 0xe0, 0xb, 0x0, 0x0, 0xe0, 0xb, 0x0, 0x0,
      0xe0, 0xb, 0x0, 0x0, 0xe0, 0xb, 0x0, 0x0, 0xe0, 0xb, 0x0, 0x0,
    ])
  ),
  // [  5 ]  (17.0) (16.5) (16.0) (16.0) (21.0) (28.5) (36.0) (34.4) (34.7) (37.4) (38.0) (40.0)
  mockUSBCommand(
    26,
    new Uint8Array([
      0x74, 0x27, 0x0, 0x0, 0xf4, 0x1, 0x0, 0x0, 0xe8, 0x3, 0x0, 0x0, 0x1e, 0x5,
      0x0, 0x0, 0x22, 0x6, 0x0, 0x0, 0x30, 0x7, 0x0, 0x0, 0x34, 0x8, 0x0, 0x0,
      0x42, 0x9, 0x0, 0x0, 0x50, 0xa, 0x0, 0x0, 0x54, 0xb, 0x0, 0x0, 0xae, 0xb,
      0x0, 0x0, 0xae, 0xb, 0x0, 0x0, 0xae, 0xb, 0x0, 0x0, 0xae, 0xb, 0x0, 0x0,
      0xae, 0xb, 0x0, 0x0, 0xae, 0xb, 0x0, 0x0, 0xae, 0xb, 0x0, 0x0,
    ])
  ),
];

/*
#define EFI_DEBUG_LOG 80 blanco
#define EFI_DEBUG_INFO 81 azul
#define EFI_DEBUG_EVENT 82 verde
#define EFI_DEBUG_ERROR 83 rojo
*/

// RPM 1446; POS 25
// 55 6C 42 4E 49 44 45 30 4E 44 59 37 49 46 42 50 55 79 41 79 4E 51 3D 3D

// USB Disconnected
// 56 56 4E 43 49 45 52 70 63 32 4E 76 62 6D 35 6C 59 33 52 6C 5A 41 3D 3D

// Memory Checksum finished
//54 57 56 74 62 33 4A 35 49 45 4E 6F 5A 57 4E 72 63 33 56 74 49 47 5A 70 62 6D 6C 7A 61 47 56 6B

// INY on cil: 1 DEG: 120.4 TICK: 138
// 53 55 35 5A 49 47 39 75 49 47 4E 70 62 44 6F 67 4D 53 42 45 52 55 63 36 49 44 45 79 4D 43 34 30 49 46 52 4A 51 30 73 36 49 44 45 7A 4F 41 3D 3D

// ENG on cil: 4 DEG: 320.85 TICK: 230
// 52 55 35 48 49 47 39 75 49 47 4E 70 62 44 6F 67 4E 43 42 45 52 55 63 36 49 44 4D 79 4D 43 34 34 4E 53 42 55 53 55 4E 4C 4F 69 41 79 4D 7A 41 3D

// Sample info message
// 55 32 46 74 63 47 78 6C 49 47 6C 75 5A 6D 38 67 62 57 56 7A 63 32 46 6E 5A 51 3D 3D

// Sample error message
// 55 32 46 74 63 47 78 6C 49 47 56 79 63 6D 39 79 49 47 31 6C 63 33 4E 68 5A 32 55 3D

// Sample event message
// 55 32 46 74 63 47 78 6C 49 47 56 32 5A 57 35 30 49 47 31 6C 63 33 4E 68 5A 32 55 3D

const mockedDebug = [
  mockUSBCommand(
    80,
    new Uint8Array([
      0x55, 0x6c, 0x42, 0x4e, 0x49, 0x44, 0x45, 0x30, 0x4e, 0x44, 0x59, 0x37,
      0x49, 0x46, 0x42, 0x50, 0x55, 0x79, 0x41, 0x79, 0x4e, 0x51, 0x3d, 0x3d,
    ])
  ),
  mockUSBCommand(
    81,
    new Uint8Array([
      0x56, 0x56, 0x4e, 0x43, 0x49, 0x45, 0x52, 0x70, 0x63, 0x32, 0x4e, 0x76,
      0x62, 0x6d, 0x35, 0x6c, 0x59, 0x33, 0x52, 0x6c, 0x5a, 0x41, 0x3d, 0x3d,
    ])
  ),
  mockUSBCommand(
    81,
    new Uint8Array([
      0x54, 0x57, 0x56, 0x74, 0x62, 0x33, 0x4a, 0x35, 0x49, 0x45, 0x4e, 0x6f,
      0x5a, 0x57, 0x4e, 0x72, 0x63, 0x33, 0x56, 0x74, 0x49, 0x47, 0x5a, 0x70,
      0x62, 0x6d, 0x6c, 0x7a, 0x61, 0x47, 0x56, 0x6b,
    ])
  ),

  mockUSBCommand(
    82,
    new Uint8Array([
      0x53, 0x55, 0x35, 0x5a, 0x49, 0x47, 0x39, 0x75, 0x49, 0x47, 0x4e, 0x70,
      0x62, 0x44, 0x6f, 0x67, 0x4d, 0x53, 0x42, 0x45, 0x52, 0x55, 0x63, 0x36,
      0x49, 0x44, 0x45, 0x79, 0x4d, 0x43, 0x34, 0x30, 0x49, 0x46, 0x52, 0x4a,
      0x51, 0x30, 0x73, 0x36, 0x49, 0x44, 0x45, 0x7a, 0x4f, 0x41, 0x3d, 0x3d,
    ])
  ),
  mockUSBCommand(
    82,
    new Uint8Array([
      0x52, 0x55, 0x35, 0x48, 0x49, 0x47, 0x39, 0x75, 0x49, 0x47, 0x4e, 0x70,
      0x62, 0x44, 0x6f, 0x67, 0x4e, 0x43, 0x42, 0x45, 0x52, 0x55, 0x63, 0x36,
      0x49, 0x44, 0x4d, 0x79, 0x4d, 0x43, 0x34, 0x34, 0x4e, 0x53, 0x42, 0x55,
      0x53, 0x55, 0x4e, 0x4c, 0x4f, 0x69, 0x41, 0x79, 0x4d, 0x7a, 0x41, 0x3d,
    ])
  ),

  mockUSBCommand(
    81,
    new Uint8Array([
      0x55, 0x32, 0x46, 0x74, 0x63, 0x47, 0x78, 0x6c, 0x49, 0x47, 0x6c, 0x75,
      0x5a, 0x6d, 0x38, 0x67, 0x62, 0x57, 0x56, 0x7a, 0x63, 0x32, 0x46, 0x6e,
      0x5a, 0x51, 0x3d, 0x3d,
    ])
  ),

  mockUSBCommand(
    82,
    new Uint8Array([
      0x55, 0x32, 0x46, 0x74, 0x63, 0x47, 0x78, 0x6c, 0x49, 0x47, 0x56, 0x32,
      0x5a, 0x57, 0x35, 0x30, 0x49, 0x47, 0x31, 0x6c, 0x63, 0x33, 0x4e, 0x68,
      0x5a, 0x32, 0x55, 0x3d,
    ])
  ),
  mockUSBCommand(
    83,
    new Uint8Array([
      0x55, 0x32, 0x46, 0x74, 0x63, 0x47, 0x78, 0x6c, 0x49, 0x47, 0x56, 0x79,
      0x63, 0x6d, 0x39, 0x79, 0x49, 0x47, 0x31, 0x6c, 0x63, 0x33, 0x4e, 0x68,
      0x5a, 0x32, 0x55, 0x3d,
    ])
  ),
];

const commands: Array<IUSBCommand> = [
  // mockUSBCommand(12, new Uint8Array([0, 0, 0, 0, 0])),
  ...mockedDTC,
  /* ...mockedIgnition, */
  ...mockedDebug,
];

export default commands;
