export interface IDTCCode {
  code: string;
  type: 'WARN' | 'ERR' | 'INFO';
  description: string;
  info?: Array<string>;
  symptoms?: Array<string>;
  causes?: Array<string>;
}

export interface DTCCodesInterface {
  efiCodes: Array<string> | null;
  parsedCodes: Array<IDTCCode> | null;
  parsedLoading: boolean;
  efiLoading: boolean;
}

function state(): DTCCodesInterface {
  return {
    efiCodes: null,
    parsedCodes: null,
    parsedLoading: false,
    efiLoading: false,
  };
}

export default state;
