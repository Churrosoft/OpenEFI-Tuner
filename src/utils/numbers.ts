export const uint8ArrayToInt32 = (arr: Array<number> | Uint8Array, from = 0): number => {
  return Number((arr[from + 1] << 8) + (arr[from + 2] << 16) + (arr[from + 3] << 24) + arr[from]);
};

export const parseInt32 = (n: number | string) => new Uint8Array(new Int32Array([Number(n)]).buffer);

export const getInt32 = (n: Array<number> | Uint8Array) => {
  const buff = new Uint8Array(4);

  buff[0] = n[0];
  buff[1] = n[1];
  buff[2] = n[2];
  buff[3] = n[3];

  const view = new DataView(buff.buffer, 0);
  return view.getInt32(0, true);
};
