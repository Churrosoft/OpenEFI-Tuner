<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<template>
  <router-view />
</template>
<script lang="ts">
import { setCssVar, useQuasar } from 'quasar';
import { defineComponent, watch } from 'vue';
import { useStore } from 'vuex';
import { storeKey } from './store';
import { startWorking } from './store/usb-layer/serialInterface';

import 'canvas-datagrid';

const myIcons: { [key: string]: string } = {
  'app:injector': 'img:/injector2.svg',
};

declare global {
  interface Window {
    getStore: () => void;
    getActions: () => { [_key: string]: [(payload: unknown) => void] };
    sendUsbMessage: (payload: unknown) => void;
  }
}

export default defineComponent({
  name: 'App',
  setup() {
    const q = useQuasar();
    const store = useStore(storeKey);

    // TODO: luego borrar estas dos lineas si dejo en ligth mode por defecto
    q.dark.set(true);
    setCssVar('secondary', '#DAD2D8');

    q.iconMapFn = (iconName) => {
      const icon = myIcons[iconName];
      if (icon !== void 0) {
        return { icon: icon };
      }
    };

    const getStore = () =>
      // @ts-expect-error Sky- :|
      Array.from(document.querySelectorAll('*')).find((e) => e.__vue_app__).__vue_app__.config.globalProperties.$store
        .state;

    const getActions = () =>
      // @ts-expect-error ...
      Array.from(document.querySelectorAll('*')).find((e) => e.__vue_app__).__vue_app__.config.globalProperties.$store
        ._actions;

    window.getStore = getStore;
    window.getActions = getActions;
    window.sendUsbMessage = (payload) => window.getActions()['UsbLayer/sendCommand'][0](payload);

    // initial page load
    navigator.serial.getPorts().then((e) => {
      // TODO: en caso de multiples dispositivos (openefi/dash a la vez) tengo que revisar a que estaba conectado previamente
      e[0] && startWorking(e[0], store);
    });

    // before update/connect
    navigator.serial.onconnect = () => {
      navigator.serial.getPorts().then((e) => {
        e[0] && startWorking(e[0], store);
      });
    };

    navigator.serial.ondisconnect = (event) => {
      console.log('Device disconnected', event);

      store.dispatch('UsbLayer/reset');
    };

    watch(
      () => q.dark.isActive,
      (val) => {
        if (val) {
          setCssVar('secondary', '#DAD2D8');
        } else {
          setCssVar('secondary', '#143642');
        }
      }
    );
  },
});
</script>
