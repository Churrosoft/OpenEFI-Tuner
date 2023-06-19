<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md row justify-around items-center injection_form">
    <div class="q-gutter-md">
      <q-input outlined v-model="formData.flowCCMin" label="flow CC Min" />
      <q-input outlined v-model="formData.fuelDensity" label="fuel density" />
      <q-separator />
      <q-input outlined v-model="formData.injectorOnTime" label="On time" />
      <q-input outlined v-model="formData.injectorOffTime" label="Off time" />
    </div>
    <div class="q-gutter-md">
      <q-select outlined v-model="formData.fuelType" :options="options" label="Fuel Type" />

      <q-input outlined v-model="formData.fuelType.value" v-i label="fuel density" disable />
      <q-separator />
      <q-input outlined v-model="mockedModel" label="MAX PWM" disable />
      <q-input outlined v-model="mockedModel" label="MIN PWM" disable />
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

const options = [
  {
    label: 'gasoline',
    value: 0.0726,
  },
  {
    label: 'gasoline E85',
    value: 0.7445,
  },
  {
    label: 'gasoil',
    value: 0.85,
  },
  {
    label: 'Ethanol',
    value: 0.789,
  },
  {
    label: 'racefuel',
    value: 0.8045,
  },
];

// const engineConfig = getEfiConfiguration(store?.getters);

const formData = ref({
  flowCCMin: 15,
  fuelDensity: 15,
  injectorOnTime: 15,
  injectorOffTime: 15,
  fuelType: options[0],
});

/*
onMounted(() => {
  formData.value.injectorOnTime = engineConfig?.injection.injector.on_time;
}); */

watchEffect(() => {
  if (store.state.Memory.efi_cfg) {
    const engineConfig = store.state.Memory.efi_cfg;
    formData.value.injectorOnTime = engineConfig.injection.injector.on_time;
    formData.value.injectorOffTime = engineConfig.injection.injector.off_time;
    formData.value.flowCCMin = engineConfig.injection.injector.flow_cc_min;
    formData.value.fuelDensity = engineConfig.injection.injector.fuel_density;

    formData.value.fuelType =
      options.filter((fuel) => fuel.value === engineConfig.injection.injector.fuel_density)?.pop() ?? options[0];
  }
});

const onSubmit = () => {
  //
};

const onReset = () => {
  //
};
</script>
