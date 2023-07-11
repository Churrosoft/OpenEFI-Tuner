import mock from './mock';
//data.getElementsByName("ignitionTable")[0].textContent.split("\n").map(str => str.trim()).filter(str => str).map(str => str.split(" "))

type nulleableString = string | null | undefined;

const strTo2DArray = (str: nulleableString): Array<Array<string>> | null => {
  if (str === null || str === undefined) return null;

  if (str.length) {
    const rows = str
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s);
    const formatedRows = rows.map((row) => row.split(' '));
    return formatedRows;
  }

  return null;
};

const strToArray = (str: nulleableString): Array<string> | null => {
  if (str === null || str === undefined) return null;

  if (str.length) {
    const rows = str
      .split(' ')
      .map((s) => s.trim())
      .filter((s) => s.length);
    return rows;
  }

  return null;
};

declare global {
  interface HTMLElement {
    attributes: {
      rows: Node;
      columns: Node;
      digits: Node;
      units: Node;
    };
  }
}

const getFromXmlDom = (xml: Document, query: string) => {
  const data = xml.getElementsByName(query)?.[0]?.textContent ?? null;
  const rows = xml.getElementsByName(query)?.[0]?.attributes?.rows?.textContent ?? null;
  const columns = xml.getElementsByName(query)?.[0]?.attributes?.columns?.textContent ?? null;
  const digits = xml.getElementsByName(query)?.[0]?.attributes?.digits?.textContent ?? null;
  const units = xml.getElementsByName(query)?.[0]?.attributes?.units?.textContent ?? null;
  const _raw = xml.getElementsByName(query);

  return { data, rows, columns, digits, units, _raw };
};

export const testParser = () => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(mock, 'text/xml');

  const tableData = getFromXmlDom(xmlDoc, 'ignitionTable');
  const ignitionLoad = getFromXmlDom(xmlDoc, 'ignitionLoadBins');
  const ignitionRpm = getFromXmlDom(xmlDoc, 'ignitionRpmBins');

  console.log(ignitionRpm);

  console.log(strTo2DArray(tableData.data));
  console.log(strToArray(ignitionLoad.data));
};
