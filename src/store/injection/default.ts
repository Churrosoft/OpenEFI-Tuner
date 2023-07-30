const mockRow = {
  col_0: '30',
  col_4: '30',
  col_8: '30',
  col_12: '30',
  col_16: '30',
  col_20: '30',
  col_24: '30',
  col_28: '30',
  col_32: '30',
  col_36: '30',
  col_40: '30',
  col_44: '30',
  col_48: '30',
  col_52: '30',
  col_56: '30',
  col_60: '30',
  col_64: '30'
};


export const defaultInjectionVE = [
  {
    col_0: '0',
    col_4: '600',
    col_8: '750',
    col_12: '1100',
    col_16: '1400',
    col_20: '1700',
    col_24: '2000',
    col_28: '2300',
    col_32: '2600',
    col_36: '2900',
    col_40: '3200',
    col_44: '3500',
    col_48: '3800',
    col_52: '4100',
    col_56: '4400',
    col_60: '4700',
    col_64: '7500'
  },
  ...Array(16).fill(mockRow),
];
