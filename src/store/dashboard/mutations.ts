import { MutationTree } from 'vuex';
import { DashboardInterface } from './state';

const mutation: MutationTree<DashboardInterface> = {
  setDashboard(
    state,
    {
      rpm,
      temperature,
      battery,
      advance,
      efiStatus,
      tps,
      AFR,
      airTemperature,
      injection,
    }: DashboardInterface
  ) {
    state.rpm = rpm;
    state.temperature = temperature;
    state.battery = battery;
    state.advance = advance;
    state.efiStatus = efiStatus;
    //new
    state.tps = tps;
    state.AFR = AFR;
    state.airTemperature = airTemperature;
    state.injection = injection;
  },
  setDashboardConfig(
    state,
    {
      rpmTicks,
      maxRpm,
      highlights,
    }: {
      rpmTicks: Array<number>;
      maxRpm: number;
      highlights: Array<{
        from: number;
        to: number;
        color: string;
      }>;
    }
  ) {
    state.gaugeOptions.rpm = {
      majorTicks: rpmTicks,
      maxValue: maxRpm,
      highlights: highlights,
    };
  },
  setDashboardLoading(state, loading: boolean) {
    state.loading = loading;
  },
};

export default mutation;
