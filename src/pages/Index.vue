<template>
  <q-page class="row items-center justify-evenly">
    <RPMGauge />

    <q-card>
      <q-card-section class="battery">
        <h5>Battery</h5>
        <span class="battery__digit-container">
          <div class="battery__digit-container--digits">
            <h4 class="battery__dseg-display">!9.60</h4>
            <h4 class="battery__dseg-display__background">8888</h4>
          </div>
          <h4 class="battery__digit-container--volts">V</h4>
        </span>
      </q-card-section>
    </q-card>
    <!--   <div>
      <example-component
        title="Example component"
        active
        :todos="todos"
        :meta="meta"
      ></example-component>
      <q-btn @click="sendHello"> Send EFI HELLO </q-btn>
      <canvas
        id="canvas-id"
        data-type="radial-gauge"
      ></canvas>
    </div> -->
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import RPMGauge from 'components/Dashboard/RPMGauge.vue';
import { defineComponent } from 'vue';
import { storeKey } from '../store';
import { useStore } from 'vuex';
import './dashboard.scss';

export default defineComponent({
  name: 'PageIndex',
  components: { RPMGauge },
  setup() {
    const store = useStore(storeKey);

    return { store };
  },
});
</script>
