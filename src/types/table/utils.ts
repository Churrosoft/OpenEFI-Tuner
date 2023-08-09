// aca dejo todos los types para manejo de tablas y ref de tablas

import { diff } from 'deep-object-diff';
import { getGroupedUSBCommands, getUSBCommand, IUSBCommand, SerialCommand, SerialStatus } from 'src/types/commands';
import {computed, ref,  watchEffect} from 'vue';
import { Store } from 'vuex';
import {
  getTableRanges,
  IEditEvent,
  IMakeTableRequest,
  IMakeUploadTable, ISelectEvent,
  ITableRow,
  IUseTable,
  setActiveStyle,
  TABLE_STATUS_INTERVAL,
  TABLE_TYPES_MAPPING,
} from '.';
import { StateInterface } from 'src/store';

export const makeTableRequest =
  ({ store, intTable, paired, actions, mocked, table,storeIndex }: IMakeTableRequest) =>
  () => {
    if (mocked) {
      void store.dispatch('Memory/getTable', table);

      if(storeIndex) {
          void store.dispatch(actions.success,storeIndex);
      }else{
          void store.dispatch(actions.success);
      }
      return;
    }

    if (!paired.value) return;

    void store.dispatch('Memory/requestTable', table);
      if(storeIndex) {
          void store.dispatch(actions.start,storeIndex);
      }else{
          void store.dispatch(actions.start);
      }
    const tableInterval = () => {
      const tableAvailable = getUSBCommand(store.getters, SerialCommand.Table, SerialStatus.DataChunkEnd);
      const tableError = getUSBCommand(store.getters, SerialCommand.Table, SerialStatus.Error);

      if (tableAvailable) {
        console.debug('Table OK');
        void store.dispatch('Memory/getTable', {
          tableSize: TABLE_TYPES_MAPPING[table].size,
          setData: actions.success,
        });
        clearInterval(intTable as NodeJS.Timeout);
      }
      if (tableError) {
          if(storeIndex) {
              void store.dispatch(actions.error,storeIndex);
          }else{
              void store.dispatch(actions.error);
          }
        console.debug('Table error');
        clearInterval(intTable as NodeJS.Timeout);
      }
    };

    intTable = setInterval(tableInterval, TABLE_STATUS_INTERVAL);
  };

export const makeUploadTable =
  ({ store, paired, update, table }: IMakeUploadTable) =>
  (tableValues: Array<ITableRow> | null, remoteTableValues: Array<ITableRow> | null) => {
    if (!paired.value) return;
    if (!tableValues) return;
    if (!remoteTableValues) return;

    const rowsToUpdate: Array<ITableRow & { index: number }> = [];

    tableValues.map((newTableRow, tableRowIndex) => {
      const rowDiff = diff(remoteTableValues[tableRowIndex], newTableRow);
      if (Object.keys(rowDiff).length) {
        rowsToUpdate.push({ index: tableRowIndex, ...newTableRow });
      }
    });

    if (!rowsToUpdate.length) return;

    void store.dispatch('Memory/writeTable', { data: rowsToUpdate, selectedTable: table });
    void store.dispatch(update, tableValues);
  };

export const makeInputChecks = ({
  table,
  store,
  tableClass,
  updateCommand,
  selectChange,
  storeIndex,
}: {
  table: unknown;
  store: Store<StateInterface>;
  tableClass: string;
  updateCommand: string;
  selectChange: (data: ISelectEvent['selectedCells']) => void
  storeIndex ?:string;
}) => {
  //ma' que timeout esperar a que exista el nodo en el dom, pero bueno
  setTimeout(() => {
    const tableRef = document.getElementsByClassName(tableClass);
    if (tableRef[0]) {
      tableRef[0].addEventListener(
        'beforeendedit',
        function (editEvent: IEditEvent) {
          const { abort, newValue } = editEvent;

          if (isNaN(Number(newValue))) {
            abort();
            return;
          }

          setTimeout(() => {
            if(storeIndex) {
              void store.commit(updateCommand, {table:storeIndex, tableData:table});
            }else {
              void store.commit(updateCommand, table);
            }
          }, 10);
        } as EventListener,
        false
      );

      tableRef[0].addEventListener(
        'selectionchanged',
        function (editEvent: ISelectEvent) {
          selectChange(editEvent.selectedCells);
        } as EventListener,
        false
      );
    }
  }, 100);
};

const deReferenceRows = (value: unknown) => JSON.parse(JSON.stringify(value)) as Array<ITableRow>;

export const useTable = ({ store, actions, state, paired, intTable, table: selectedTable ,storeIndex}: IUseTable) => {
  const table = ref(deReferenceRows(state.tableData.value));
  const uploadResult = computed((): Array<IUSBCommand> | null =>
    getGroupedUSBCommands(store.getters, [
      { command: SerialCommand.Table, status: SerialStatus.UploadOk },
      { command: SerialCommand.Table, status: SerialStatus.Error },
    ])
  );

  // store => view update
  watchEffect(() => {
    if (state.tableData.value) {
      const ranges = getTableRanges(state.tableData.value);
      setActiveStyle(ranges.max, ranges.min, true);
    }
    table.value = deReferenceRows(state.tableData.value);
  });

  // view => store => HW update
  watchEffect(() => {
    if (uploadResult.value) {
      if(storeIndex) {
        void store.commit(actions.uploadResult, {table:storeIndex, tableData:uploadResult.value});
      }else {
        void store.commit(actions.uploadResult, table);
      }
    }
  });

  const uploadTable = makeUploadTable({ store, paired, update: actions.update, table: selectedTable });
  const requestTable = makeTableRequest({
    store,
    paired,
    intTable,
    table: selectedTable,
    actions: actions as IMakeTableRequest['actions'],
      storeIndex
  });

  return { uploadTable, requestTable, table };
};


/*
vuex.esm-bundler.js:999 [vuex] unknown mutation type: Injection/checkUploadResult
 */
