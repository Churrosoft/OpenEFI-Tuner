import { Store } from 'vuex';
import { storeKey } from 'store/index';
import { IUSBCommand } from 'src/types/commands';

let serialCache: Array<number> = [];
let intConnection: NodeJS.Timeout | null = null;

export const startWorking = async (port: SerialPort, store: Store<typeof storeKey>) => {
  // El baudrate se podrriiia reconfigurar luego

  console.debug('portInfo:', port.getInfo());

  await port.open({ baudRate: 921600000 /* 921600 */ /* 512000 */ });

  if (!port.writable) return;
  const writer = port.writable.getWriter();

  void store.dispatch('UsbLayer/setWriter', writer);

  void store.dispatch('UsbLayer/sendCommand', {
    command: 1,
    status: 0,
  });

  const pingInterval = () => {
    const command = store.getters['UsbLayer/getCommand'](0x1) as IUSBCommand;
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
          void store.dispatch('UsbLayer/reset');
          break;
        }
        if (!value) {
          void store.dispatch('UsbLayer/reset');
          return;
        }

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

          for (chunksProccesed = 0, j = serialCache.length; chunksProccesed < j; chunksProccesed += CHUNK_SIZE) {
            command = serialCache.slice(chunksProccesed, chunksProccesed + CHUNK_SIZE);
            if (command.length > 127) {
              void store.dispatch('UsbLayer/reciveFrame', command);
              proccesed++;
            }
          }

          serialCache = [...serialCache.slice(proccesed * 128)];
        }
      }
    } catch (error) {
      console.warn('error mientras se procesaba el CDC: ', error);
      void store.dispatch('UsbLayer/reset');
    } finally {
      reader.releaseLock();
    }
  }
  void store.dispatch('UsbLayer/reset');
};
