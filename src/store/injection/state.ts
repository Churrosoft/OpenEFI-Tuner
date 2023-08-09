import {ITableRow, ITableStatus} from 'src/types/table';

export interface InjectionInterface {
  tables_loading: boolean;
  tables: {
    rpm_load: Array<ITableRow> | null; // rename to rpm_load_ve
    rpm_load_afr: Array<ITableRow> | null;
  };
  table_cache: {
    rpm_load: Array<ITableRow> | null;
    rpm_load_afr: Array<ITableRow> | null;
  };
  status: {
    rpm_load: ITableStatus;
    rpm_load_afr: ITableStatus;
  };
}

function state(): InjectionInterface {
  return {
    tables_loading: false,
    tables: {
      rpm_load: null,
      rpm_load_afr: null,
    },
    table_cache: {
      rpm_load: null,
      rpm_load_afr: null
    },
    status: {
      rpm_load: null,
      rpm_load_afr: null,
    },
  };
}

export default state;
