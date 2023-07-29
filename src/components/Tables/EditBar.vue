<template>
  <div class="row q-mt-md">
    <q-toggle v-model="percentageToggle" size="md" class="q-mr-sm">Editar %</q-toggle>
    <q-btn icon="add" class="q-mr-sm" @click="handleAddButton"/>
    <q-btn icon="remove" class="q-mr-sm" @click="handleMinusButton"/>
    <q-btn icon="drag_handle" class="q-mr-sm" @click="handleEqButton"/>
    <q-input
        class="edit_bar_input"
        dense
        outlined
        step=".1"
        style="max-width: 200px"
        type="number"
        v-model.number="editInput"
    />
  </div>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue';
import {ICell, ISelectEvent, ITableRow} from '../../types/table';

const editInput = ref(0);
const percentageToggle = ref(false);
const props = defineProps<{
  tableValues: Ref<null | Array<ITableRow>>;
  updateTable: (data: Array<ITableRow>) => void;
  selection: ISelectEvent['selectedCells'] | null
}>();

const handleAddButton = () => {
  handleMassiveActions('add');
}


const handleMinusButton = () => {
  handleMassiveActions('minus');
}

const handleEqButton = () => {
  handleMassiveActions('equal');
}
const handleMassiveActions = (operation: 'add' | 'minus' | 'equal') => {
  if (props.tableValues.value == null) return;
  if (!props.selection?.length) return;

  const tableValues = [...props.tableValues.value] as Array<{ [key: string | number]: string }>;

  const doMath = (a: string, b: string | number) => {
    const _a = Number(a);
    const _b = Number(b);

    switch (operation) {
      case 'add':
        return percentageToggle.value ? (_a + (_a * _b)).toFixed(2) : (_a + _b).toFixed(2);
      case 'minus':
        return percentageToggle.value ? (_a - (_a * _b)).toFixed(2) : (_a - _b).toFixed(2);
      default:
        return b.toString();
    }
  }

  for (let cellIndex = 0; cellIndex < props.selection.length; cellIndex++) {
    const selectedCell = props.selection[cellIndex] as ICell;
    const columnIndex = Object.keys(tableValues[selectedCell.boundRowIndex])[selectedCell.boundColumnIndex];

    tableValues[selectedCell.boundRowIndex][columnIndex] = doMath(tableValues[selectedCell.boundRowIndex][columnIndex], editInput.value);
  }
  props?.updateTable(tableValues as Array<ITableRow>);

};
</script>
