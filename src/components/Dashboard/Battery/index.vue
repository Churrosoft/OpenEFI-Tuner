<template>
  <q-card>
    <q-card-section class="battery">
      <h5>Battery</h5>
      <span class="battery__digit-container">
        <div class="battery__digit-container--digits">
          <h4 class="battery__dseg-display">
            {{ value.padStart(5, '!') }}
          </h4>
          <h4 class="battery__dseg-display__background">8888</h4>
        </div>
        <h4 class="battery__digit-container--volts">V</h4>
      </span>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import './styles.scss';

export default defineComponent({
  name: 'Battery',
  props: ['value'],
  setup() {
    return {};
  },
});
</script>
