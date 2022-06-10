<template>
  <q-item
    clickable
    tag="a"
    :target="link ? (link.startsWith('#') ? '' : '_blank') : ''"
    :href="link"
    v-if="!innerItems?.length"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <span v-if="!icon" class="q-mr-xl"> </span>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-expansion-item
    expand-separator
    v-if="innerItems?.length"
    :icon="icon"
    :label="title"
    :caption="caption"
  >
    <EssentialLink v-for="link in innerItems" :key="link.title" v-bind="link" class="q-mr-md" />
  </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
    innerItems: Array as PropType<
      Array<{ title: string; caption?: string; link?: string; icon?: string }>
    >,
  },
});
</script>
