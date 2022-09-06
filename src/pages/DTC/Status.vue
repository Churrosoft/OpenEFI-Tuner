<template>
  <div>
    <h4 class="q-mt-md q-mb-md">DTC Status</h4>
    <h6 class="q-mt-md q-mb-lg">
      you can view and remove dtc/fault codes from here
    </h6>
    <q-btn flat @click="requestEfiCodes" icon="receipt" rounded>
      Request codes from EFI
    </q-btn>

    <q-linear-progress
      class="q-mb-lg q-mt-md"
      indeterminate
      rounded
      size="15px"
      animation-speed="600"
      v-if="dtcStore.parsedLoading || dtcStore.efiLoading"
    />
  </div>

  <div
    class="q-pa-md row items-start q-gutter-md"
    v-if="dtcStore.parsedCodes !== null"
  >
    <q-card
      v-for="dtc in dtcStore.parsedCodes"
      :key="dtc.code"
      style="max-width: 300px"
    >
      <q-card-section :class="getClassName(dtc.type)">
        <div class="text-h6">{{ dtc.type }}: {{ dtc.code }}</div>
        <div class="text-subtitle2" style="word-break: break-word">
          {{ dtc.description }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat class="q-mr-lg" @click="requestCodeInfo(dtc)">
          More Info
        </q-btn>
        <q-btn flat @click="requestDtcDelete(dtc)">Clear</q-btn>
      </q-card-actions>
    </q-card>
  </div>

  <q-dialog v-model="fixed" v-if="codeInfo">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ codeInfo.code }} description</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <span v-if="codeInfo.info">
          <h5 class="q-mt-md q-mb-md">What does that mean?</h5>
          <p
            v-for="(description, id) in codeInfo.info"
            :key="`description-${id}`"
          >
            {{ description }}
          </p>
        </span>

        <span v-if="codeInfo.symptoms">
          <h5 class="q-mt-md q-mb-md">Symptoms:</h5>

          <p v-for="(symptom, id) in codeInfo.symptoms" :key="`symptom-${id}`">
            {{ symptom }}
          </p>
        </span>

        <span v-if="codeInfo.causes">
          <h5 class="q-mt-md q-mb-md">Causes:</h5>
          <p v-for="(causes, id) in codeInfo.causes" :key="`cause-${id}`">
            {{ causes }}
          </p>
        </span>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="clearDtc" v-if="codeInfo">
    <q-card class="q-pa-md">
      <q-card-section>
        <div class="text-h5">Confirm delete code: {{ codeInfo.code }}?</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Yes" color="primary" v-close-popup class="q-mr-xl" />
        <q-btn flat label="No" color="secondary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import { IDTCCode } from 'store/dtc_codes';
import { storeKey } from 'store/index';

const store = useStore(storeKey);

let fixed = ref(false);
let clearDtc = ref(false);
let codeInfo = ref<IDTCCode | null>(null);

const dtcStore = computed(() => store.state.DtcCodes);

function getClassName(code: IDTCCode['type']) {
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
}

function requestEfiCodes() {
  void store.dispatch('DtcCodes/getDTCfromEFI');
}

function requestCodeInfo(mockCode: IDTCCode) {
  fixed.value = true;
  codeInfo.value = mockCode;
}

function requestDtcDelete(code: IDTCCode) {
  clearDtc.value = true;
  codeInfo.value = code;
}
</script>
