<template>
  <q-card>
    <q-card-section class="battery">
      <h5>{{ props.title }}</h5>
      <span class="battery__digit-container">
        <div class="battery__digit-container--digits">
          <h4 class="battery__dseg-display">
            {{ props.value.padStart(maxValue ?? 5, '!') }}
          </h4>
          <h4 class="battery__dseg-display__background">
            {{
              Array(maxValue ?? 4)
                .fill('8')
                .join('')
            }}
          </h4>
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
  maxValue?: number;
}

const props = defineProps<ISegment>();
</script>
