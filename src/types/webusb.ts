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
