import { ITableRow } from 'src/types/tables';

export type ITableStatus = null | 'loading' | 'error';
export interface InjectionInterface {
  tables_loading: boolean;
  tables: {
    rpm_load: Array<ITableRow> | null;
  };
  status: {
    rpm_load: ITableStatus;
  };
}

function state(): InjectionInterface {
  return {
    tables_loading: false,
    tables: {
      rpm_load: null,
    },
    status: {
      rpm_load: null,
    },
  };
}

export default state;
