<template>
  <q-item
    clickable
    tag="a"
    :target="props.link ? (props.link.startsWith('#') ? '' : '_blank') : ''"
    :href="props.link"
    v-if="!innerItems?.length"
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <span v-if="!props.icon" class="q-mr-xl"> </span>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>
        {{ props.caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
  <q-expansion-item
    expand-separator
    v-if="props.innerItems?.length"
    :icon="props.icon"
    :label="props.title"
    :caption="props.caption"
  >
    <EssentialLink
      v-for="link in props.innerItems"
      :key="link.title"
      v-bind="link"
      class="q-mr-md"
    />
  </q-expansion-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface IEssentialLink {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  innerItems?: Array<IEssentialLink>;
}

const props = defineProps<IEssentialLink>();
</script>
