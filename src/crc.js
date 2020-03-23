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

export default crc16;