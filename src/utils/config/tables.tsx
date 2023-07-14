import { ITableRow } from 'src/types/table';
import { getFromXmlDom, strTo2DArray, strToArray } from './parser';

export const parseTableData = (
  data: Array<Array<string>> | null,
  xAxisData: Array<string> | null,
  yAxisData: Array<string> | null
): Array<ITableRow> | null => {
  if (!data || !xAxisData || !yAxisData) return null;

  const xRow: ITableRow = {
    col_0: '',
  };
  xAxisData.map((cell, cellIndex) => {
    xRow[`col_${cellIndex + 1}`] = cell;
  });

  const tableRows: Array<ITableRow> = [xRow];

  data.map((row, rowIndex) => {
    const rowData: ITableRow = {
      col_0: yAxisData[rowIndex],
    };
    row.map((cell, cellIndex) => {
      rowData[`col_${cellIndex + 1}`] = cell;
    });
    tableRows.push(rowData);
  });

  return tableRows;
};

export const TABLES = {
  IGNITION: 'IGNITION',
  VE: 'VE',
  LAMBDA: 'LAMBDA',
};

const tableDataMappings = {
  [TABLES.IGNITION]: 'ignitionTable',
  [TABLES.VE]: 'veTable',
  [TABLES.LAMBDA]: 'lambdaTable',
};

const tableXMappings = {
  [TABLES.IGNITION]: 'ignitionRpmBins',
  [TABLES.VE]: 'veRpmBins',
  [TABLES.LAMBDA]: 'lambdaRpmBins',
};

const tableYMappings = {
  [TABLES.IGNITION]: 'ignitionLoadBins',
  [TABLES.VE]: 'veLoadBins',
  [TABLES.LAMBDA]: 'lambdaLoadBins',
};

export const parseTable = (xmlDoc: Document, tableType: keyof typeof TABLES): Array<ITableRow> | null => {
  const tableData = strTo2DArray(getFromXmlDom(xmlDoc, tableDataMappings[tableType]).data);

  const tableX =
    strToArray(getFromXmlDom(xmlDoc, tableXMappings[tableType]).data)?.map((cell) =>
      Number(cell).toFixed(0).toString()
    ) ?? null;

  const tableY =
    strToArray(getFromXmlDom(xmlDoc, tableYMappings[tableType]).data)?.map((cell) =>
      Number(cell).toFixed(0).toString()
    ) ?? null;

  return parseTableData(tableData, tableX, tableY);
};
