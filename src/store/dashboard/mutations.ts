import { MutationTree } from 'vuex';
import { DashboardInterface } from './state';

const mutation: MutationTree<DashboardInterface> = {
  setDashboard(state, { rpm, temperature, batery, advance, efiStatus }: DashboardInterface) {
    state.rpm = rpm;
    state.temperature = temperature;
    state.batery = batery;
    state.advance = advance;
    state.efiStatus = efiStatus;
  },
};

export default mutation;
