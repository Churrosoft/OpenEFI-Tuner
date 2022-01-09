<template>
  <canvas id="canvas-id" data-type="radial-gauge"></canvas>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { RadialGauge } from 'canvas-gauges';
import { defineComponent } from 'vue';
import { storeKey } from 'src/store';
import { useStore } from 'vuex';
import { RPMGaugeConfig } from './config';

let gauge: RadialGauge | null = null;

export default defineComponent({
  name: 'RPMGauge',
  components: {},
  mounted: () => {
    gauge = new RadialGauge(RPMGaugeConfig);
    gauge.draw();
    gauge.value = 4500;
    gauge.update({
      ...RPMGaugeConfig,
      maxValue: 4500,
      majorTicks: [0, 750, 1000, 1500, 3000, 4000, 4500],
    });
    gauge.draw();
  },
  methods: {
    sendHello() {
      console.log('asdas');
    },
  },
  setup() {
    const store = useStore(storeKey);

    return { store };
  },
});
</script>
