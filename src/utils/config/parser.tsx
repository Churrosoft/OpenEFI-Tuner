type nulleableString = string | null | undefined;

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

export const strTo2DArray = (str: nulleableString): Array<Array<string>> | null => {
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

export const strToArray = (str: nulleableString): Array<string> | null => {
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

export const getFromXmlDom = (xml: Document, query: string) => {
  const data = xml.getElementsByName(query)?.[0]?.textContent ?? null;
  const rows = xml.getElementsByName(query)?.[0]?.attributes?.rows?.textContent ?? null;
  const columns = xml.getElementsByName(query)?.[0]?.attributes?.columns?.textContent ?? null;
  const digits = xml.getElementsByName(query)?.[0]?.attributes?.digits?.textContent ?? null;
  const units = xml.getElementsByName(query)?.[0]?.attributes?.units?.textContent ?? null;
  const _raw = xml.getElementsByName(query);

  return { data, rows, columns, digits, units, _raw };
};
