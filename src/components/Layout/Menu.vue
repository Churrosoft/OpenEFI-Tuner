<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="toggleLeftDrawer" round dense icon="menu" />
        <q-toolbar-title>OpenEFI | Tuner</q-toolbar-title>
        <q-spacer />
        <Connect/>
      </q-toolbar>
    </q-header>

    <NavBar />
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import NavBar from 'src/components/Layout/NavBar.vue';
import Connect from '../Connect.vue';

import { defineComponent, ref } from 'vue';

import { storeKey } from '../../store';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Menu',

  components: {
    NavBar,
    Connect
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $store = useStore(storeKey);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        void $store.dispatch('Layout/toogleMenu');
      },
    };
  },
});
</script>
