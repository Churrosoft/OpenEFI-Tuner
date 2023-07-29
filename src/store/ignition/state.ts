import {ITableRow} from 'src/types/table';

export type ITableStatus = null | 'loading' | 'error';
export interface IgnitionInterface {
  tables_loading: boolean;
  tables: {
    rpm_load: Array<ITableRow> | null;
  };
  table_cache: {
    rpm_load: Array<ITableRow> | null;
  };
  status: {
    rpm_load: ITableStatus;
  };
}

function state(): IgnitionInterface {
  return {
    tables_loading: false,
    tables: {
      rpm_load: null,
    },
    table_cache: {
      rpm_load: null,
    },
    status: {
      rpm_load: null,
    },
  };
}

export default state;
