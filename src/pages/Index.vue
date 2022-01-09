<template>
  <q-page class="row items-center justify-evenly">
    <RPMGauge />
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

export default defineComponent({
  name: 'PageIndex',
  components: { RPMGauge },
  setup() {
    const store = useStore(storeKey);

    return { store };
  },
});
</script>
