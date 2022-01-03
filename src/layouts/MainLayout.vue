<template>
  <Menu />
</template>

<script lang="ts">
import Menu from 'src/components/Layout/Menu.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Menu,
  },

  setup() {
    return {};
  },
});
</script>
