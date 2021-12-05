/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const uint16 = n => n & 0xffff;

const crc16 = data_p => {
  let crc = 0xffff;
  let x = 0x0;
  data_p.map(element => {
    x = uint16((crc >> 8) ^ element);
    x ^= uint16(x >> 4);
    crc = uint16((crc << 8) ^ (x << 12) ^ (x << 5) ^ x);
  });
  return crc;
};

export function buf2hex(buffer) { // buffer is an ArrayBuffer
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}


export default crc16;