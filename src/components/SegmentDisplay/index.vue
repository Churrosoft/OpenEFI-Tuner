<template>
  <q-card>
    <q-card-section class="battery">
      <h5>{{ props.title }}</h5>
      <span class="battery__digit-container">
        <div class="battery__digit-container--digits">
          <h4 class="battery__dseg-display">
            {{ formatNumber(props.value) }}
          </h4>
          <h4 class="battery__dseg-display__background">
            {{ Array(padSize).fill('8').join('') }}
          </h4>
        </div>
        <h4 class="battery__digit-container--volts">{{ props.unit }}</h4>
      </span>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import './styles.scss';

interface ISegment {
  value?: string | number | null;
  roundTo?: number;
  title?: string;
  unit?: string;
  maxValue?: number;
}

const props = defineProps<ISegment>();

const padSize = props.maxValue ?? 5;

const formatNumber = (n?: string | number | null) => {
  if (!n) {
    return ''.padStart(padSize, '-');
  }
  let numberFormated = String(
    Number(n)
      .toFixed(props.roundTo ?? 2)
      .padStart(padSize + 1, '!')
  );
  return numberFormated;
};
</script>
