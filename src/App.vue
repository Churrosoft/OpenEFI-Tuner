<template>
  <router-view />
</template>
<script lang="ts">
import { setCssVar, useQuasar } from 'quasar';
import { defineComponent, watch } from 'vue';
import { Store, useStore } from 'vuex';
import { storeKey } from './store';
import { startWorking } from './store/usb-layer/serialInterface';

const myIcons: { [key: string]: string } = {
  'app:injector': 'img:/injector2.svg',
};

export default defineComponent({
  name: 'App',
  setup() {
    const q = useQuasar();
    const store = useStore(storeKey) as unknown as Store<typeof storeKey>;
    // luego borrar estas dos lineas si dejo en ligth mode por defecto
    q.dark.set(true);
    setCssVar('secondary', '#DAD2D8');

    q.iconMapFn = (iconName) => {
      const icon = myIcons[iconName];
      if (icon !== void 0) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        return { icon: icon };
      }
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    window.getStore = () =>
      // @ts-expect-error asddsa
      Array.from(document.querySelectorAll('*')).find((e) => e.__vue_app__).__vue_app__.config.globalProperties.$store
        .state;
    // @ts-expect-error ads
    window.getActions = () =>
      // @ts-expect-error asddsa
      Array.from(document.querySelectorAll('*')).find((e) => e.__vue_app__).__vue_app__.config.globalProperties.$store
        ._actions;

    // @ts-expect-error ads
    window.sendUsbMessage = (payload) => window.getActions()['UsbLayer/sendMessage'][0](payload);

    // initial page load
    navigator.serial.getPorts().then((e) => {
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
        console.log(val ? 'On dark mode' : 'On light mode');
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
