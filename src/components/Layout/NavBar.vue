<template>
  <q-drawer
    @update:modelValue="toggleLeftDrawer()"
    :model-value="$store.state.Layout.toogleMenu"
    show-if-above
    bordered
  >
    <q-scroll-area class="fit">
      <q-list>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { storeKey } from 'store/index';

import EssentialLink from 'src/components/Layout/EssentialLink.vue';
import linksList from './links';

const $store = useStore(storeKey);

function toggleLeftDrawer() {
  void $store.dispatch('Layout/toogleMenu');
}
</script>
