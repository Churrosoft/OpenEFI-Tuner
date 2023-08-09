import { ComputedRef } from 'vue';
import { Store } from 'vuex';

import { StateInterface } from 'src/store';
import { TABLE_TYPES } from './constants';

export type ITABLE_REF = (typeof TABLE_TYPES)[keyof typeof TABLE_TYPES];

export type ITableRow = {
  [k: `col_${string}`]: string;
};

export type ITableStatus = null | 'loading' | 'error';

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
  storeIndex ?:string;
}

export interface ICell {
  value: string;
  header: {
    name: string;
    title: string;
    index: number;
    columnIndex: number;
    type: 'string';
  };
  columnName: string;
  boundRowIndex: number;
  boundColumnIndex: number;
  viewRowIndex: number;
  viewColumnIndex: number;
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
    storeUpdate?: string; // no ce usa ma'
    uploadResult: string;
  };
  state: {
    tableData: ComputedRef<Array<ITableRow> | null>;
  };

  table: ITABLE_REF;
  // new
  storeIndex?:string;
}

export interface IEditEvent extends Event {
  newValue: string;
  oldValue: string;
  cell: unknown;
  abort: VoidFunction;
}
export interface ISelectEvent extends Event {
  selectedCells: Array<ICell>;
  selectedData: Array<null | ITableRow>;
  selectionBounds: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
  preventDefault: VoidFunction;
}

export * from './styling';
export * from './constants';
export * from './utils';
