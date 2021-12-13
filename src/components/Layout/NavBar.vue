<template>
  <q-drawer
    v-model="$store.state.Layout.toogleMenu"
    show-if-above
    bordered
    no-swipe-close
    overlay
  >
    <q-scroll-area class="fit">
      <q-list>
        <!--   <q-item-label header> Essential Links </q-item-label> -->

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts">
import EssentialLink from 'src/components/Layout/EssentialLink.vue';

const linksList = [
  {
    title: 'Dashboard',
    caption: 'quasar.dev',
    icon: 'space_dashboard',
    link: 'https://quasar.dev',
  },
  {
    title: 'DTC',
    caption: 'github.com/quasarframework',
    icon: 'memory',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Ignition',
    caption: 'configure ignition tables',
    icon: 'table_view',
    link: '#ignition',
  },
  {
    title: 'Settings',
    caption: 'chat.quasar.dev',
    icon: 'settings',
    link: 'https://chat.quasar.dev',
  },
];

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',

  components: {
    EssentialLink,
  },

  setup() {
    return {
      essentialLinks: linksList,
    };
  },
});
</script>
