export interface TableStyles {
  style: {
    cellWidth: number;
    width: string;
  };
  getBoundingClientRect: () => { width: number };
}

interface cellEvent {
  cell: {
    header: {
      name: string;
    };
    value: string;
  };
  ctx: {
    fillStyle: string;
  };
}

const styleTableCells = (e: Event) => {
  const eventCell = e as unknown as cellEvent;
  if (/omittam/.test(eventCell.cell.value)) {
    eventCell.ctx.fillStyle = '#AEEDCF';
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

    tb.style.cellWidth =
      width / cell_count > 65 ? width / cell_count - 0.15 : 65;

    tb.style.width = '100%';
    observer.disconnect();

    table.addEventListener('rendercell', styleTableCells);
  }
};

export const getTableObserver = (cell_count: number, table_class: string) => {
  const observer = new MutationObserver((_, observer) =>
    applyTableStyles(_, observer, cell_count, table_class)
  );
  const targetNode = document.body;

  observer.observe(targetNode, { childList: true, subtree: true });
};

export const cleanTableEvents = (table_class: string) => {
  const table = document.querySelector(`.${table_class}`);
  table?.removeEventListener('rendercell', styleTableCells);
};
