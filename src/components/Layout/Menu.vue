<template>
  <div>
    <q-layout view="lHh Lpr lFf" container style="height: 300px">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title> OpenEFI | Tuner </q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>

      <NavBar />

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import NavBar from 'src/components/Layout/NavBar.vue';

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
    title: 'Tables',
    caption: 'github.com/quasarframework',
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

import { defineComponent, ref } from 'vue';
import { computed } from 'vue';

import store from '../../store';
import { storeKey } from '../../store';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Menu',

  components: {
    NavBar,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $store = useStore(storeKey);

    let drawerState = computed({
      get: () => $store?.state?.Layout?.toogleMenu,
      set: (val) => {
        $store.commit('layout/toogle_menu', val);
      },
    });

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      $store,
      drawerState,
      toggleLeftDrawer() {
        void $store.dispatch('Layout/toogleMenu');
      },
    };
  },
});
</script>
