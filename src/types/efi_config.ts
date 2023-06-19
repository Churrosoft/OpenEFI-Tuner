import { StateInterface } from 'src/store';
import { Store } from 'vuex';

export interface IEFICfg {
  ready: boolean;
  injection: {
    target_lambda: number;
    target_stoich: number;
    enable_alphaN: boolean;
    enable_speedDensity: boolean;
    injector: {
      flow_cc_min: number;
      injector_count: number;
      fuel_pressure: number;
      fuel_density: number;
      on_time: number;
      off_time: number;
    };
  };
  engine: {
    cilinder_count: number;
    displacement: number;
    ckp_tooth_count: number;
    ckp_missing_tooth: number;
  };
}

//TODO: fix, add watchEffect/ref
export const getEfiConfiguration = (getters: Store<StateInterface>['getters']): null | IEFICfg => {
  if (getters) return getters['Memory/getEFIConfig']() as null | IEFICfg;
  return null;
};

export enum uploadStatus {
  'OK',
  'FAILED',
}

export const uploadEfiConfiguration = (dispatch: Store<StateInterface>['dispatch'], newCfg: IEFICfg) => {
  dispatch('Memory/updateConfig', newCfg, { root: true });
};
