<template>
  <div class="q-mr-lg q-ml-xl">
    <q-btn
      color="primary"
      @click="connectUsbDevice"
      :disable="store.state.UsbLayer.paired"
    >
      Connect
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { IUSBCommand } from 'store/usb-layer';
import { storeKey } from 'store/index';
import { useStore } from 'vuex';
import { Navigator, SerialPort } from '../types/webusb';

let serialCache: Array<number> = [];
let intConnection: NodeJS.Timeout | null = null;

const store = useStore(storeKey);

const connectUsbDevice = () => {
  // por ahora solo filtro por vendor
  const usbVendorId = 0x1209;

  (navigator as unknown as Navigator).serial
    .requestPort({ filters: [{ usbVendorId }] })
    .then((port) => {
      void store.dispatch('UsbLayer/initConnection', true);
      void startWorking(port);
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((_e) => {
      // este catch puede pasar porque el usuario no agarro un puerto o estaba ocupado
      void store.dispatch('UsbLayer/initConnection', false);
    });
};

const startWorking = async (port: SerialPort) => {
  // El baudrate se podrriiia reconfigurar luego
  await port.open({ baudRate: 512000 });

  if (!port.writable) return;
  const writer = port.writable.getWriter();

  void store.dispatch('UsbLayer/setWriter', writer);

  void store.dispatch('UsbLayer/sendMessage', {
    command: 1,
    payload: [0xff],
  });

  const pingInterval = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const command = store.getters['UsbLayer/getCommand'](12) as IUSBCommand;
    if (command) {
      clearInterval(intConnection as NodeJS.Timeout);
      void store.dispatch('UsbLayer/connected', command.payload);
      void store.dispatch('UsbLayer/removeCommand', command);
    }
  };

  intConnection = setInterval(pingInterval, 50);

  while (port.readable) {
    const reader = port.readable.getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          // |reader| has been canceled.
          // TODO: disparar accion para mostrar estado "desconectado"
          break;
        }
        if (!value) return;

        /** Esto es medio un bardo pero:
         * dependiendo la cantidad de recursos que disponga Chrome al momento que se ejecute esto
         * puede o no, splitear los comandos en varios paquetes, (no, no en el tamaño del usb que serian 64b)
         * sino en cualquier otro tamaño, sean de a 3,5,8,200b de un saque
         * asi que toca ir iterando cada 128b que es el tamaño de paquete que se usa para OpenEFI
         * y el resto guardarlo en una variable temporal hasta que "caiga" el resto por la api de Chrome
         * tmb se podria procesar el CRC aca pero lo vengo haciendo en el store
         */
        const CHUNK_SIZE = 128;

        serialCache = [...serialCache, ...value];

        if (serialCache.length > CHUNK_SIZE - 1) {
          let chunksProccesed: number;
          let j: number;
          let command: Array<number>;
          let proccesed = 0;

          for (
            chunksProccesed = 0, j = serialCache.length;
            chunksProccesed < j;
            chunksProccesed += CHUNK_SIZE
          ) {
            command = serialCache.slice(
              chunksProccesed,
              chunksProccesed + CHUNK_SIZE
            );
            if (command.length > 127) {
              void store.dispatch('UsbLayer/recv', command);
              proccesed++;
            }
          }

          serialCache = [...serialCache.slice(proccesed * 128)];
        }
      }
    } catch (error) {
      // algun dia me saco la paja y agarro el error
    } finally {
      reader.releaseLock();
    }
  }
  // comp.$store.commit('setDisconnected');
};
</script>
