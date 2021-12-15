<template>
  <div>
    <h4 class="q-mt-md q-mb-md">DTC Status</h4>
    <h6 class="q-mt-md q-mb-lg">
      you can view and remove dtc/fault codes from here
    </h6>
    <q-linear-progress
      class="q-mb-lg"
      indeterminate
      rounded
      size="15px"
      animation-speed="600"
    />
  </div>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="dtc in codes" :key="dtc.code" style="max-width: 300px">
      <q-card-section :class="getClassName(dtc.type)">
        <div class="text-h6">{{ dtc.type }}: {{ dtc.code }}</div>
        <div class="text-subtitle2" style="word-break: break-word">
          {{ dtc.short_description }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat class="q-mr-lg" @click="requestCodeInfo(dtc.code)">
          More Info
        </q-btn>
        <q-btn flat>Clear</q-btn>
      </q-card-actions>
    </q-card>
  </div>

  <q-dialog v-model="fixed">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ selectedCode }} description</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <p v-for="n in 15" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </p>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';

const codes = [
  {
    type: 'WARN',
    code: 'P0030',
    short_description:
      'Heated Oxygen Sensor (H02S) Heater Control Circuit Bank 1 Sensor 1',
  },
  {
    type: 'ERR',
    code: 'P0030',
    short_description:
      'Heated Oxygen Sensor (H02S) Heater Control Circuit Bank 1 Sensor 1',
  },
  {
    type: 'INFO',
    code: 'P0101',
    short_description:
      'Mass or Volume Air flow Circuit Range/Performance Problem',
  },
];

export default defineComponent({
  name: 'DTCStatus',

  components: {},

  setup() {
    return {
      fixed: ref(false),
      codes,
      selectedCode: '',

      getClassName(code: string) {
        switch (code) {
          case 'ERR':
            return 'text-white bg-red-6';

          case 'WARN':
            return 'text-white bg-warning';

          case 'INFO':
            return 'text-white bg-indigo-8';

          default:
            return 'text-white bg-secondary';
        }
      },
    };
  },
  methods: {
    requestCodeInfo(code: string) {
      this.fixed = true;
      this.selectedCode = code;
    },
  },
});
</script>
//
