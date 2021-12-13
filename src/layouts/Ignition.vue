<template>
  <Menu />
</template>

<script lang="ts">
import Menu from 'src/components/Layout/Menu.vue';

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Ignition',

  components: {
    Menu,
  },

  setup() {
    return {};
  },
});
</script>
