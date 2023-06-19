<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md row justify-between items-center injection_form">
    <div class="q-gutter-md">
      <q-input outlined v-model="formData.targetLambda" label="Target Lambda" />
      <q-input outlined v-model="formData.targetStoich" label="Target Stoichiometric" />
    </div>
    <div class="q-gutter-md">
      <q-list>
        <q-item-label header>Injection stratergy</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="formData.injectionStratergy" val="AlphaN" color="orange" />
          </q-item-section>
          <q-item-section>
            <q-item-label>AlphaN</q-item-label>
            <q-item-label caption>
              The Alpha-N style of engine tuning looks at the throttle position sensor and measures RPM <br />
              to arrive at its calculations, instead of looking at the intake manifold pressure like Speed Density does.
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-radio v-model="formData.injectionStratergy" val="SpeedDensity" color="orange" />
          </q-item-section>
          <q-item-section>
            <q-item-label>SpeedDensity</q-item-label>
            <q-item-label caption
              >The speed-density model uses the speed-density equation to calculate the engine air mass flow.<br />
              The equation relates the engine air mass flow to the intake manifold gas pressure, <br />intake manifold
              gas temperature, and engine speed.
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
          <q-item-section avatar top>
            <q-radio v-model="formData.injectionStratergy" val="BaseFuel" color="orange" />
          </q-item-section>
          <q-item-section>
            <q-item-label>BaseFuel</q-item-label>
            <q-item-label caption>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import './form.scss';

import { useStore } from 'vuex';
import { storeKey } from 'store/index';

const store = useStore(storeKey);
const mockedModel = ref('');

const formData = ref({
  targetLambda: 15,
  targetStoich: 15,
  injectionStratergy: 'AlphaN',
});

watchEffect(() => {
  if (store.state.Memory.efi_cfg) {
    const engineConfig = store.state.Memory.efi_cfg;
    formData.value.targetLambda = engineConfig.injection.target_lambda;
    formData.value.targetStoich = engineConfig.injection.target_stoich;
  }
});

const onSubmit = () => {
  //
};

const onReset = () => {
  //
};
</script>
