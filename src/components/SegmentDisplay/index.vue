<template>
  <q-card>
    <q-card-section class="battery">
      <h5>{{ props.title }}</h5>
      <span class="battery__digit-container">
        <div class="battery__digit-container--digits">
          <h4 class="battery__dseg-display">
            {{ props.value.padStart(5, '!') }}
          </h4>
          <h4 class="battery__dseg-display__background">8888</h4>
        </div>
        <h4 class="battery__digit-container--volts">{{ props.unit }}</h4>
      </span>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import './styles.scss';

interface ISegment {
  value: string;
  title?: string;
  unit?: string;
}

const props = defineProps<ISegment>();
</script>
