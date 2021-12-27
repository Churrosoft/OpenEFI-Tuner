export interface TableStyles {
  style: {
    cellWidth: number;
    width: string;
  };
  getBoundingClientRect: () => { width: number };
}

export const styleMappings = {
  ignition_rpm_load: {
    '5': '#536dfe',
    '10': '#448aff',
    '14': '#00b0ff',
    '23': '#ff0',
    '27': '#ffca28',
    '30': '#ffc107',
    '33': '#ff9100',
    '36': '#ef5350',
  },
};

let activeStyleMapping = styleMappings.ignition_rpm_load;

export const setActiveStyle = (style: keyof typeof styleMappings) => {
  activeStyleMapping = styleMappings[style];
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

const styleTableCells = (e: Event) => {
  const eventCell = e as unknown as cellEvent;

  // no colorear la' esquina:
  if (Number(eventCell.cell.boundRowIndex) < 1 || Number(eventCell.cell.boundColumnIndex) < 1)
    return;

  for (const styleKey in activeStyleMapping) {
    const color = activeStyleMapping[styleKey as keyof typeof activeStyleMapping];
    if (Number(eventCell.cell.value) >= Number(styleKey)) {
      eventCell.ctx.fillStyle = color;
    }
  }
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
  console.log(table);
  if (!table) {
    const observer = new MutationObserver((_, observer) =>
      applyTableStyles(_, observer, cell_count, table_class)
    );
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

export type ITableRow = {
  [k: `col_${string}`]: string;
};
