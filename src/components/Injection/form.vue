<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md row justify-around items-center injection_form">
    <div class="q-gutter-md">
      <q-input outlined v-model="text" label="flow CC Min" />
      <q-input outlined v-model="text" label="fuel density" />
      <q-separator />
      <q-input outlined v-model="text" label="On time" />
      <q-input outlined v-model="text" label="Off time" />
    </div>
    <div class="q-gutter-md">
      <q-select outlined v-model="model" :options="options" label="Fuel Type" />

      <q-input outlined v-model="text" label="fuel density" />
      <q-separator />
      <q-input outlined v-model="text" label="MAX PWM" disable />
      <q-input outlined v-model="text" label="MIN PWM" disable />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import './form.scss';
const text = ref('');
const model = ref('');
const options = ['gasoline', 'gasoline E85', 'gasoil', 'Ethanol', 'racefuel'];

const onSubmit = () => {
  //
};

const onReset = () => {
  //
};
</script>
