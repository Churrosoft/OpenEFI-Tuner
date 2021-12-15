<template>
  <q-drawer
    @update:modelValue="toggleLeftDrawer()"
    :model-value="$store.state.Layout.toogleMenu"
    show-if-above
    bordered
    
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
    caption: '',
    icon: 'space_dashboard',
    link: '#',
  },
  {
    title: 'DTC',
    caption: 'read/erase DTC codes',
    icon: 'memory',
    link: '#dtc',
  },
  {
    title: 'Ignition',
    caption: 'configure ignition tables',
    icon: 'table_view',
    link: '#ignition/tables',
  },
  {
    title: 'Settings',
    caption: 'system settings',
    icon: 'settings',
    link: 'https://chat.quasar.dev',
  },
];

import { defineComponent } from 'vue';
import { storeKey } from '../../store';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'NavBar',

  components: {
    EssentialLink,
  },

  setup() {
    const $store = useStore(storeKey);

    return {
      essentialLinks: linksList,
      toggleLeftDrawer() {
        void $store.dispatch('Layout/toogleMenu');
      },
    };
  },
});
</script>
