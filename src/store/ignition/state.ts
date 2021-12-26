import { ITableRow } from 'src/types/tables';

export interface IgnitionInterface {
  tables_loading: boolean;
  tables: {
    rpm_load: Array<ITableRow> | null;
  };
}

function state(): IgnitionInterface {
  return {
    tables_loading: false,
    tables: {
      rpm_load: null,
    },
  };
}

export default state;
