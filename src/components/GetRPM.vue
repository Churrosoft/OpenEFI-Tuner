<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4">
        <v-btn color="primary" @click="reqTEMP">Get TEMP</v-btn>
        <v-btn color="primary" @click="reqRPM">Get RPM</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { storeKey } from '../store';
import { useStore } from 'vuex';

export default {
  data: () => ({}),
  methods: {
    reqTEMP() {
      const store = useStore(storeKey);

      if (store.state.UsbLayer.connected) {
        void store.dispatch('sendMessage', { command: 2, subcommand: 1 });
      } else {
        console.warn('todavia no se puede pelotudo');
      }
    },
    reqRPM() {
      const store = useStore(storeKey);

      if (store.state.UsbLayer.connected) {
        void store.dispatch('sendMessage', { command: 2, subcommand: 2 });
      } else {
        console.warn('todavia no se puede pelotudo');
      }
    },
  },
};
</script>
