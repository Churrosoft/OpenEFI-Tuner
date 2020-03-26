<template>
  <v-container>
    <connect v-if="!$store.state.connected"/>
    <div v-else-if="!$store.state.paired">Esperando terminal...</div>
    <div v-else>
      Conectado. Firmware v<span v-html="$store.state.firmware_ver.major + '.' + $store.state.firmware_ver.minor + '.' + $store.state.firmware_ver.rev"/>
      <v-btn color="red" @click="bootload">Reset to bootloader</v-btn>
    </div>
  </v-container>
</template>

<script>
import Connect from '@/components/Connect.vue'

export default {
  name: 'Home',
  components: {
    Connect
  },
  methods:{
    bootload(){
      this.$store.dispatch('sendMessage', { command: 11, subcommand: 0 });
    }
  }
}
</script>
