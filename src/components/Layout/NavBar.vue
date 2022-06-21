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
    caption: '',
    icon: 'settings_input_component',
    innerItems: [
      {
        title: 'Tables',
        caption: 'configure ignition tables',
        link: '#ignition/tables',
      },
      {
        title: 'Configuration',
        caption: '(Dwell time, ignition, cold advance)',
        link: '#dtc',
      },
    ],
  },
  {
    title: 'Injection',
    caption: '',
    icon: 'mdi-needle',
    innerItems: [
      {
        title: 'Tables',
        caption: '(AFR, Fuel VE, FuelPump)',
        link: '#ignition/tables',
      },

      {
        title: 'Configuration',
        caption: '(Calculations, DeadTime|PWM, FuelCutout)',
        link: '#dtc',
      },
      {
        title: 'Advanced Configuration',
        caption: '(dual fuel, NoS, Water/Meth injection)',
        link: '#dtc',
      },
    ],
  },
  {
    title: 'Startup / IDLE',
    caption: '',
    icon: 'mdi-car-speed-limiter',
    innerItems: [
      {
        title: 'Warnup Enrichment (WUE)',
        link: '#startup/wue',
      },

      {
        title: 'Afterstart Enrichment (ASE)',
        link: '#startup/ase',
      },
      {
        title: 'IDLE Advance / VE | IDLE Control',
        link: '#',
      },
    ],
  },
  {
    title: 'Settings',
    caption: 'system settings',
    icon: 'settings',
    link: 'https://chat.quasar.dev',
    innerItems: [
      {
        title: 'Sensors',
        link: '#',
      },

      {
        title: 'I/O Mapping',
        link: '#',
      },
      {
        title: 'Rev Limiter / ShiftLigth',
        link: '#',
      },
      {
        title: 'General Settings',
        link: '#',
        caption: '(tacho output, fan control, relay control)',
      },
    ],
  },
  {
    title: 'Firmware',
    caption: '(rebuild, update, factory reset)',
    icon: 'mdi-usb-flash-drive',
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
