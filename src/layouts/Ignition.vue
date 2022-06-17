<template>
  <MainMenu />
</template>

<script lang="ts">
import MainMenu from 'src/components/Layout/MainMenu.vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IgnitionLayout',

  components: {
    MainMenu,
  },

  setup() {
    return {};
  },
});
</script>
