// aca dejo todos los types para manejo de tablas y ref de tablas

import { diff } from 'deep-object-diff';
import { IGNITION_RPMTPS_SIZE } from 'src/config';
import { getGroupedUSBCommands, getUSBCommand, IUSBCommand, SerialCommand, SerialStatus } from 'src/types/commands';
/* import { deepCompare } from 'src/types/compare'; */
import { ITableRow } from 'src/types/tables';
import { computed, ComputedRef, ref, /* toRaw, watch, */ watchEffect } from 'vue';
import { Store } from 'vuex';
import { StateInterface } from '..';

export type ITABLE_REF = (typeof TABLE_TYPES)[keyof typeof TABLE_TYPES];
export const TABLE_REF_IGNITION_TPS_LOAD = 10;
export const TABLE_REF_IGNITION_TMP_LOAD = 0x3;
export const TABLE_REF_IGNITION_RPM_BATT = 0x4;

// main VE table
export const TABLE_REF_INJECTION_TPS_LOAD = 20;

// config tuner:
// eslint-disable-next-line prefer-const
export let TABLE_STATUS_INTERVAL = 50;

export interface IMakeTableRequest {
  paired: ComputedRef<boolean>;
  store: Store<StateInterface>;
  intTable: NodeJS.Timeout | null;
  mocked?: boolean;
  table: ITABLE_REF;
  actions: {
    start: string;
    success: string;
    error: string;
  };
}

export interface IMakeUploadTable {
  paired: ComputedRef<boolean>;
  store: Store<StateInterface>;
  table: ITABLE_REF;
  update: string;
}

export interface IUseTable {
  store: Store<StateInterface>;
  paired: ComputedRef<boolean>;
  intTable: NodeJS.Timeout | null;

  actions: {
    start: string;
    success: string;
    error: string;
    update: string;
    storeUpdate: string;
    uploadResult: string;
  };
  state: {
    tableData: ComputedRef<Array<ITableRow> | null>;
  };

  table: ITABLE_REF;
}

export const makeTableRequest =
  ({ store, intTable, paired, actions, mocked, table }: IMakeTableRequest) =>
  () => {
    if (mocked) {
      void store.dispatch('Memory/getTable', table);
      void store.dispatch(actions.success);
      return;
    }

    if (!paired.value) return;

    void store.dispatch('Memory/requestTable', table);
    void store.dispatch(actions.start);

    const tableInterval = () => {
      // (18, 240)
      /*       const tableAvailable = store.getters['UsbLayer/getCommand'](
        SerialCommand.Table,
        SerialStatus.DataChunkEnd
      ) as IUSBCommand | null; */
      // const tableError = store.getters['UsbLayer/getCommand'](18, 240) as IUSBCommand | null;

      const tableAvailable = getUSBCommand(store.getters, SerialCommand.Table, SerialStatus.DataChunkEnd);
      const tableError = getUSBCommand(store.getters, SerialCommand.Table, SerialStatus.Error);

      if (tableAvailable) {
        /* void store.dispatch(actions.success); */
        console.debug('Table OK');
        void store.dispatch('Memory/getTable', {
          tableSize: TABLE_TYPES_MAPPING[table].size,
          setData: actions.success,
        });
        clearInterval(intTable as NodeJS.Timeout);
      }
      if (tableError) {
        void store.dispatch(actions.error);
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

    console.log(rowsToUpdate);
    if (!rowsToUpdate.length) return;

    void store.dispatch('Memory/writeTable', { data: rowsToUpdate, selectedTable: table });
    void store.dispatch(update, tableValues);
  };

export interface IEditEvent {
  newValue: string;
  oldValue: string;
  cell: unknown;
  abort: VoidFunction;
}

export const makeInputChecks = ({
  table,
  store,
  tableClass,
  updateCommand,
}: {
  table: unknown;
  store: Store<StateInterface>;
  tableClass: string;
  updateCommand: string;
}) => {
  //ma' que timeout esperar a que exista el nodo en el dom, pero bueno
  setTimeout(() => {
    const tableRef = document.getElementsByClassName(tableClass);
    if (tableRef[0]) {
      tableRef[0].addEventListener(
        'beforeendedit',
        function (editEvent) {
          const { abort, newValue } = editEvent as unknown as IEditEvent;

          if (isNaN(Number(newValue))) {
            abort();
          }

          setTimeout(() => {
            void store.commit(updateCommand, table);
          }, 10);
        },
        false
      );
    }
  }, 100);
};

const deReferenceRows = (value: unknown) => JSON.parse(JSON.stringify(value)) as Array<ITableRow>;

export const TABLE_TYPES = {
  IGNITION_RPM_TPS: 'IGNITION_RPM_TPS',
  INJECTION_RPM_TPS: 'INJECTION_RPM_TPS',
} as const;

export const TABLE_TYPES_MAPPING = {
  IGNITION_RPM_TPS: { id: TABLE_REF_IGNITION_TPS_LOAD, size: IGNITION_RPMTPS_SIZE },
  INJECTION_RPM_TPS: { id: TABLE_REF_INJECTION_TPS_LOAD, size: IGNITION_RPMTPS_SIZE },
} as const;

export const useTable = ({ store, actions, state, paired, intTable, table: selectedTable }: IUseTable) => {
  /*  const pong = false; */
  const table = ref(deReferenceRows(state.tableData.value));
  const uploadResult = computed(
    // Protocolo: 1 Comando: 20 Status: 128
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    (): Array<IUSBCommand> | null =>
      getGroupedUSBCommands(store.getters, [
        { command: SerialCommand.Table, status: SerialStatus.UploadOk },
        { command: SerialCommand.Table, status: SerialStatus.Error },
      ]) /*
      store.getters['UsbLayer/getGroupedCommands']([
        { command: 20, status: 128 },
        { command: 20, status: 255 },
        { command: 19, status: 128 },
      ]) as IUSBCommand */
  );

  // store => view update
  watchEffect(() => {
    table.value = deReferenceRows(state.tableData.value);
  });

  // view => store => HW update
  watchEffect(() => {
    if (uploadResult.value) {
      void store.dispatch(actions.uploadResult, uploadResult.value);
    }
  });

  // view => store update
  /*
  FIXME: NO ANDAA AAAAA
  watch(
    table,
    (newTableValue) => {
      if (deepCompare(table, toRaw(newTableValue))) {
        if (!pong) {
          pong = true;
          return;
        }
        console.log('table have changed', toRaw(newTableValue));
        void store.dispatch(actions.storeUpdate, newTableValue);
        pong = false;
      }
    },
    { deep: true }
  ); */

  const uploadTable = makeUploadTable({ store, paired, update: actions.update, table: selectedTable });
  const requestTable = makeTableRequest({
    store,
    paired,
    intTable,
    table: selectedTable,
    actions: actions as IMakeTableRequest['actions'],
  });

  return { uploadTable, requestTable, table };
};
