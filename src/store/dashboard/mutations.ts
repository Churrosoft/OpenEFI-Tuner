import { MutationTree } from 'vuex';
import { DashboardInterface } from './state';

const mutation: MutationTree<DashboardInterface> = {
  setDashboard(state, { rpm, temperature, battery, advance, efiStatus }: DashboardInterface) {
    state.rpm = rpm;
    state.temperature = temperature;
    state.battery = battery;
    state.advance = advance;
    state.efiStatus = efiStatus;
  },
  setDashboardLoading(state, loading: boolean) {
    state.loading = loading;
  },
};

export default mutation;
