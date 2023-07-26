<template>
  <div class="row q-mt-md">
    <q-toggle v-model="percentageToogle" size="md" class="q-mr-sm">Editar %</q-toggle>
    <q-btn icon="add" class="q-mr-sm" @click="handleButon('add')" />
    <q-btn icon="remove" class="q-mr-sm" @click="handleButon('minus')" />
    <q-btn icon="drag_handle" class="q-mr-sm" @click="handleButon('equal')" />
    <q-input
      class="edit_bar_input"
      dense
      outlined
      step=".01"
      style="max-width: 200px"
      type="number"
      v-model.number="model"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ITableRow } from '../../types/table';
const model = ref(0);
const percentageToogle = ref(false);
const props = defineProps<{
  tableValues: Array<ITableRow> | null;
  updateTable: () => void;
}>();

const handleButon = (id: 'add' | 'minus' | 'equal') => () => {
  if (!props.tableValues) return;
  switch (id) {
    case 'add':
      break;
    case 'minus':
      break;

    default:
      break;
  }
};
</script>
