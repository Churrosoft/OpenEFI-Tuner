import { IEFICfg } from 'src/types/efi_config';

export interface MemoryInterface {
  efi_cfg_loading: boolean;
  efi_cfg: IEFICfg | null;
}

function state(): MemoryInterface {
  return {
    efi_cfg: null,
    efi_cfg_loading: false,
  };
}

export default state;
