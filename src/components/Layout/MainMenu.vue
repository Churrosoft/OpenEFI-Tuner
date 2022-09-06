<template>
  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="toggleLeftDrawer" round dense icon="menu" />
        <q-toolbar-title>OpenEFI | Tuner</q-toolbar-title>
        <q-space />
        <q-toggle
          @update:model-value="q.dark.toggle()"
          :model-value="q.dark.isActive"
          label="Dark Mode"
        />

        <div v-if="$store.state.UsbLayer.paired" class="q-mr-lg q-ml-xl">
          <span v-if="$store.state.UsbLayer.firmware_ver.type === '0'"
            >OpenEFI</span
          >
          <span v-if="$store.state.UsbLayer.firmware_ver.type === '1'"
            >uEFI</span
          >
          <span v-if="$store.state.UsbLayer.firmware_ver.type === '2'"
            >DashDash</span
          >
          <span> v</span>
          <span>{{ $store.state.UsbLayer.firmware_ver.major }}</span>
          <span>.{{ $store.state.UsbLayer.firmware_ver.minor }}</span>
          <span>.{{ $store.state.UsbLayer.firmware_ver.rev }}</span>
        </div>

        <Connect />
      </q-toolbar>
      <q-linear-progress
        class="q-mb-lg q-mt-md"
        indeterminate
        rounded
        size="5px"
        animation-speed="600"
        v-if="
          $store.state.UsbLayer.connecting || $store.state.Dashboard.loading
        "
      />
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
import { useQuasar } from 'quasar';

import { defineComponent, ref } from 'vue';

import { storeKey } from 'store/index';
import { useStore } from 'vuex';
//import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Menu',

  components: {
    NavBar,
    Connect,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $store = useStore(storeKey);
    const q = useQuasar();

    /*   const { t } = useI18n({
      inheritLocale: true,
      useScope: 'global',
    }); // {{ t('hello') }} */

    return {
      q,
      //t,
      leftDrawerOpen,
      toggleLeftDrawer() {
        void $store.dispatch('Layout/toogleMenu');
      },
    };
  },
});
</script>
