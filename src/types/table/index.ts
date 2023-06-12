import { ComputedRef } from 'vue';
import { Store } from 'vuex';

import { StateInterface } from 'src/store';
import { TABLE_TYPES } from './constants';

export type ITABLE_REF = (typeof TABLE_TYPES)[keyof typeof TABLE_TYPES];

export type ITableRow = {
  [k: `col_${string}`]: string;
};

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

export interface IEditEvent extends Event {
  newValue: string;
  oldValue: string;
  cell: unknown;
  abort: VoidFunction;
}

export * from './styling';
export * from './constants';
export * from './utils';
