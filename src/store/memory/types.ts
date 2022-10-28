// aca dejo todos los types para manejo de tablas y ref de tablas

import { deepCompare } from 'src/types/compare';
import { ITableRow } from 'src/types/tables';
import { computed, ComputedRef, reactive, ref, toRaw, watch, watchEffect } from 'vue';
import { Store } from 'vuex';
import { StateInterface } from '..';
import { IUSBCommand } from '../usb-layer';

export const TABLE_REF_IGNITION_TPS_LOAD = 0x2;
export const TABLE_REF_IGNITION_TMP_LOAD = 0x3;
export const TABLE_REF_IGNITION_RPM_BATT = 0x4;

// config tuner:
// eslint-disable-next-line prefer-const
export let TABLE_STATUS_INTERVAL = 50;

export interface IMakeTableRequest {
  paired: ComputedRef<boolean>;
  store: Store<StateInterface>;
  intTable: NodeJS.Timeout | null;
  mocked?: boolean;
  actions: {
    start: string;
    success: string;
    error: string;
  };
}

export interface IMakeUploadTable {
  paired: ComputedRef<boolean>;
  store: Store<StateInterface>;
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
}

export const makeTableRequest =
  ({ store, intTable, paired, actions, mocked }: IMakeTableRequest) =>
  () => {
    if (mocked) {
      void store.dispatch(actions.success);
      return;
    }

    if (!paired.value) return;
    void store.dispatch(actions.start);

    const tableInterval = () => {
      const tableAvailable = store.getters['UsbLayer/getCommand'](127) as IUSBCommand | null;
      const tableError = store.getters['UsbLayer/getCommand'](130) as IUSBCommand | null;

      if (tableAvailable) {
        void store.dispatch(actions.success);
        clearInterval(intTable as NodeJS.Timeout);
      }
      if (tableError) {
        void store.dispatch(actions.error);
        clearInterval(intTable as NodeJS.Timeout);
      }
    };

    intTable = setInterval(tableInterval, TABLE_STATUS_INTERVAL);
  };

export const makeUploadTable =
  ({ store, paired, update }: IMakeUploadTable) =>
  (tableValues: Array<ITableRow>) => {
    if (!paired.value) return;
    if (!tableValues) return;

    void store.dispatch(update, tableValues);
  };

const deReferenceRows = (value: unknown) => JSON.parse(JSON.stringify(value)) as Array<ITableRow>;

export const useTable = ({ store, actions, state, paired, intTable }: IUseTable) => {
  let pong = false;
  const table = ref(deReferenceRows(state.tableData.value));

  const uploadResult = computed(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    (): IUSBCommand => store.getters['UsbLayer/getGroupedCommands']([25, 32]) as IUSBCommand
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
  );

  const uploadTable = makeUploadTable({ store, paired, update: actions.update });
  const requestTable = makeTableRequest({ store, paired, intTable, actions: actions as IMakeTableRequest['actions'] });

  return { uploadTable, requestTable, table };
};
