<template>
  <q-card>
    <q-card-section class="BarDisplay">
      <h5>
        {{ props.title }}
      </h5>
      <q-linear-progress
        size="50px"
        color="accent"
        class="q-mt-sm"
        :value="value && value / 100"
        :indeterminate="!value"
        :animation-speed="50"
      >
        <div class="absolute-full flex flex-center" v-if="value">
          <q-badge color="white" text-color="accent" :label="value + '%'"></q-badge>
        </div>
      </q-linear-progress>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import './styles.scss';

interface IBarDisplay {
  value?: number;
  title: string;
  unit?: string;
  maxValue?: number;
}

const props = defineProps<IBarDisplay>();
</script>
