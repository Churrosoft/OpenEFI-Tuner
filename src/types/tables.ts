export interface TableStyles {
  style: {
    cellWidth: number;
    width: string;
  };
  getBoundingClientRect: () => { width: number };
}

export const applyTableStyles = (
  _: unknown,
  observer: { disconnect: () => void },
  cell_count: number
) => {
  const table = document.getElementsByClassName('ignition_table');
  if (table[0]) {
    const tb = table[0] as unknown as TableStyles;
    const { width } = tb.getBoundingClientRect();

    tb.style.cellWidth = width / cell_count > 65 ? width / cell_count : 65;

    tb.style.width = '100%';
    observer.disconnect();
  }
};

export const getTableObserver = (cell_count: number) => {
  const observer = new MutationObserver((_, observer) =>
    applyTableStyles(_, observer, cell_count)
  );
  const targetNode = document.body;

  observer.observe(targetNode, { childList: true, subtree: true });
};
