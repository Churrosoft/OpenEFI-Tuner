import { ITableRow } from '.';
export interface TableStyles {
  style: {
    cellWidth: number;
    width: string;
  };
  getBoundingClientRect: () => { width: number };
}

let activeStyleMapping = {
  max: Number.MIN_SAFE_INTEGER,
  min: Number.MAX_SAFE_INTEGER,
  reverseColor: false,
};

export const setActiveStyle = (max: number, min: number, reverseColor: boolean) => {
  activeStyleMapping = {
    max,
    min,
    reverseColor,
  };
};

interface cellEvent {
  cell: {
    header: {
      name: string;
    };
    boundRowIndex: string;
    boundColumnIndex: string;
    value: string;
  };
  ctx: {
    fillStyle: string;
  };
}

export function getTableRanges(tableValues: Array<ITableRow>) {
  // slice para sacar los headers
  const rawValues = tableValues
    .slice(1)
    .map((row) => Object.values(row).slice(1))
    .flat();

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  //Find min and max
  rawValues.map((val) => {
    const v = parseFloat(val);
    if (v < min) min = v;
    if (v > max) max = v;
  });

  return { min, max };
}

// from: https://github.com/rusefi/msqur/blob/208d9400e2f790992c59df35956d92ad577f697f/src/view/msqur.js#L149
export const getTableCellColor = (cellValue: string, intensity = 0.6) => {
  const range = activeStyleMapping.max - activeStyleMapping.min;

  let r = 0,
    g = 0,
    b = 0;

  //MegaTune coloring scheme
  let percent = (parseFloat(cellValue) - activeStyleMapping.min) / range;

  if (activeStyleMapping.reverseColor) percent = 1.0 - percent;

  if (percent < 0.33) {
    r = 1.0;
    g = Math.min(1.0, percent * 3);
    b = 0.0;
  } else if (percent < 0.66) {
    r = Math.min(1.0, (0.66 - percent) * 3);
    g = 1.0;
    b = 0.0;
  } else {
    r = 0.0;
    g = Math.min(1.0, (1.0 - percent) * 3);
    b = 1.0 - g;
  }

  r = Math.round((r * intensity + (1.0 - intensity)) * 255);
  g = Math.round((g * intensity + (1.0 - intensity)) * 255);
  b = Math.round((b * intensity + (1.0 - intensity)) * 255);

  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

const styleTableCells = (e: Event) => {
  const eventCell = e as unknown as cellEvent;

  // no colorear la' esquina:
  if (Number(eventCell.cell.boundRowIndex) < 1 || Number(eventCell.cell.boundColumnIndex) < 1) return;

  eventCell.ctx.fillStyle = getTableCellColor(eventCell.cell.value);
};

export const applyTableStyles = (
  _: unknown,
  observer: { disconnect: () => void },
  cell_count: number,
  table_class: string
) => {
  const table = document.querySelector(`.${table_class}`);

  if (table) {
    const tb = table as unknown as TableStyles;
    const { width } = tb.getBoundingClientRect();
    tb.style.cellWidth = 80;
    tb.style.cellWidth = width / cell_count > 60 ? width / cell_count - 0.15 : 60;

    tb.style.width = '100%';
    observer.disconnect();

    table.addEventListener('rendercell', styleTableCells);
  }
};

export const getTableObserver = (cell_count: number, table_class: string) => {
  const table = document.querySelector(`.${table_class}`);
  if (!table) {
    const observer = new MutationObserver((_, observer) => applyTableStyles(_, observer, cell_count, table_class));
    const targetNode = document.body;

    observer.observe(targetNode, { childList: true, subtree: true });
  } else {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    applyTableStyles({}, { disconnect: () => {} }, cell_count, table_class);
  }
};

export const cleanTableEvents = (table_class: string) => {
  const table = document.querySelector(`.${table_class}`);
  table?.removeEventListener('rendercell', styleTableCells);
};
