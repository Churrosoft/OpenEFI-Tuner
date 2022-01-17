<template>
  <canvas id="canvas-id" data-type="radial-gauge"></canvas>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { RadialGauge } from 'canvas-gauges';
import { storeKey } from 'src/store';
import { useStore } from 'vuex';
import { RPMGaugeConfig } from './config';
import { defineComponent, watchEffect } from 'vue';

let gauge: RadialGauge | null = null;

export default defineComponent({
  name: 'RPMGauge',
  components: {},
  mounted: () => {
    gauge = new RadialGauge(RPMGaugeConfig);
    gauge.draw();
    gauge.value = 0;
    gauge.update({
      ...RPMGaugeConfig,
      maxValue: 6500,
      majorTicks: [0, 750, 1000, 1500, 3000, 4000, 4500, 5000, 6000],
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
    watchEffect(() => {
      const rpm = store.state.Dashboard.rpm;
      if (rpm !== null && gauge !== null) {
        gauge.value = rpm;
      }
    });

    watchEffect(() => {
      const rpm_config = store.state.Dashboard.gaugeOptions.rpm;
      if (rpm_config !== null && gauge !== null) {
        gauge.update({ ...RPMGaugeConfig, ...rpm_config });
      }
    });

    return { store };
  },
});
</script>
