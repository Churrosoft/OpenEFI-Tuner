export interface MemoryInterface {
  toogleMenu: boolean;
  efi_cfg: {
    loading: boolean;
    data: any | null;
  };
}

function state(): MemoryInterface {
  return {
    toogleMenu: false,
    efi_cfg: {
      loading: false,
      data: null,
    },
  };
}

export default state;
