export interface TableStyles {
  style: {
    cellWidth: string;
    width: string;
  };
}

export const applyTableStyles = (
  _: unknown,
  observer: { disconnect: () => void }
) => {
  const table = document.getElementsByClassName('ignition_table');
  if (table[0]) {
    const tb = table[0] as unknown as TableStyles;
    tb.style.cellWidth = '65';
   // tb.style.width = '100%';
    observer.disconnect();
  }
};

export const getTableObserver = () => {
  const observer = new MutationObserver(applyTableStyles);
  const targetNode = document.body;

  observer.observe(targetNode, { childList: true, subtree: true });
};
