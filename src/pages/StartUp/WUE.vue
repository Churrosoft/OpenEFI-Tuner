<template>
  <div>
   <!--  <h4 class="q-mt-md q-mb-md">DTC Status</h4>
    <h6 class="q-mt-md q-mb-lg">you can view and remove dtc/fault codes from here</h6> -->
    <LineChart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

import { storeKey } from '../../store';
import { useStore } from 'vuex';
import LineChart from 'src/components/LineChart.vue';

export default defineComponent({
  name: 'StartUpWUE',

  components: { LineChart },

  setup() {
    const $store = useStore(storeKey);

    return {
      store: $store.state.DtcCodes,
    };
  },
  methods: {},
});
</script>
