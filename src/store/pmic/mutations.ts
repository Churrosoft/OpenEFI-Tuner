import { MutationTree } from 'vuex';
import { InjectorStatus, PMICInterface, CILData, CoilStatus } from './state';

interface rawBaseStatus {
  cor: boolean;
  over_voltage: boolean;
  under_voltage: boolean;
}
interface rawFastStatus extends rawBaseStatus {
  ign: CILData<CoilStatus>;
  inj: CILData<InjectorStatus>;
}

const mutation: MutationTree<PMICInterface> = {
  updateFastStatus(state, data: rawFastStatus) {
    // do not update on Command Out Of Range (COR) error
    if (data.cor) return;
    state.overVoltage = data.over_voltage;
    state.underVoltage = data.under_voltage;
    state.fastStatus = {
      injection: data.inj,
      ignition: data.ign,
    };
  },
  updateInjectionStatus(state, data: rawBaseStatus & CILData<InjectorStatus>) {
    // do not update on Command Out Of Range (COR) error
    if (data.cor) return;
    state.overVoltage = data.over_voltage;
    state.underVoltage = data.under_voltage;
    state.injectionStatus = {
      cil_1: data.cil_1,
      cil_2: data.cil_2,
      cil_3: data.cil_3,
      cil_4: data.cil_4,
    };
  },
  updateIgnitionStatus(state, data: rawBaseStatus & CILData<CoilStatus>) {
    // do not update on Command Out Of Range (COR) error
    if (data.cor) return;
    state.overVoltage = data.over_voltage;
    state.underVoltage = data.under_voltage;
    state.ignitionStatus = {
      cil_1: data.cil_1,
      cil_2: data.cil_2,
      cil_3: data.cil_3,
      cil_4: data.cil_4,
    };
  },
};

export default mutation;
