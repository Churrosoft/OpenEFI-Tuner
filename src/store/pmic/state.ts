export enum InjectorStatus {
  Ok = 'Ok',
  GenericError = 'GenericError',
  TLIMFault = 'TLIMFault',
  BatteryShortFault = 'BatteryShortFault',
  OffOpenFault = 'OffOpenFault',
  OnOpenFault = 'OnOpenFault',
  CORError = 'CORError',
}

export enum CoilStatus {
  Ok = 'Ok',
  GenericError = 'GenericError',
  MAXIFault = 'MAXIFault',
  MaxDwellFault = 'MaxDwellFault',
  OpenSecondaryFault = 'OpenSecondaryFault',
}

export interface CILData<T> {
  cil_1: T;
  cil_2: T;
  cil_3: T;
  cil_4: T;
}

export interface PMICInterface {
  overVoltage: boolean;
  underVoltage: boolean;
  fastStatus: null | {
    injection: CILData<InjectorStatus>;
    ignition: CILData<CoilStatus>;
  };
  injectionStatus: null | CILData<InjectorStatus>;
  ignitionStatus: null | CILData<CoilStatus>;
}

function state(): PMICInterface {
  return {
    overVoltage: false,
    underVoltage: false,
    fastStatus: null,
    injectionStatus: null,
    ignitionStatus: null,
  };
}

export default state;
