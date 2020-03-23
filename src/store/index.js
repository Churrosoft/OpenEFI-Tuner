import Vue from 'vue'
import Vuex from 'vuex'
import crc from '@/crc';
import commandHandler from './commandHandler';
Vue.use(Vuex)

function buf2hex(buffer) { // buffer is an ArrayBuffer
  return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

export default new Vuex.Store({
  state: {
    usbd: null,
    writer: null,

    connected: false, // Cuando ya nos conectamos por serial
    paired: false, // Cuando le OpenEFI ya nos respondio

    firmware_ver: {major: null, minor: null, rev: null}
  },
  mutations: {
    setConnection(state, {usbd, writer}){
      state.usbd = usbd;
      state.writer = writer;
      state.connected = true;
    },
    setPaired(state, {major, minor, rev}){
      state.firmware_ver = {major: major, minor: minor, rev: rev};
      state.paired = true;
    }
  },
  actions: {
    connected({commit, dispatch}, usbd){
      commit('setConnection', {usbd: usbd, writer: usbd.writable.getWriter()})
      dispatch('sendMessage', {command: 10, subcommand: 0})
    },
    sendMessage({state}, {command, subcommand, payload}){
      const buffer = new Uint8Array(new ArrayBuffer(128))
      const payloadBuffer = new Uint8Array(new ArrayBuffer(123));
      if(payload){
        payloadBuffer.set(payload);
      }
      buffer.set([1, command, subcommand]);
      buffer.set(payloadBuffer, 3);
      buffer.set([0, 0], 126)
      state.writer.write(buffer);
    },
    recv({dispatch}, data){
      let frame = data.value;
      console.log(frame);
      let protocol = frame[0];
      let command = frame[1];
      let subcommand = frame[2];
      let payload = frame.slice(3, 126);
      let checksum = buf2hex(frame.slice(126, 128).reverse().buffer);
      console.log('Frame recibido\nProtocolo: ' + protocol + '\nComando: ' + command + '\nSubcomando: ' + subcommand + '\nPayload: ' + payload + '\nChecksum: ' + checksum);
      if(checksum != crc(frame.slice(0, 112)).toString(16)){
        console.warn("Checksums no coinciden!")
        console.log(crc(frame.slice(0, 112)).toString(16))
        console.log(checksum)
      }else{
        commandHandler(command, subcommand, payload);
      }
    },
    processCommand(i, {command, subcommand, payload}){

    }
  },
  modules: {
  }
})
