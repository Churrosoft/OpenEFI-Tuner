<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import { setCssVar } from 'quasar';
import { watch } from 'vue';
/* import 'canvas-datagrid';
 */
//setCssVar('primary', '#33F')

const myIcons: { [key: string]: string } = {
  'app:injector': 'img:/injector2.svg',
};

export default defineComponent({
  name: 'App',
  setup() {
    const q = useQuasar();
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
