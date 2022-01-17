export interface GaugeOptions {
  minValue?: number;
  maxValue: number;
  majorTicks: Array<number>;
  highlights?: Array<{
    from: number;
    to: number;
    color: string;
  }>;
}

export interface DashboardInterface {
  rpm: number | null;
  temperature: number | null;
  battery: number | null;
  advance: number | null;
  efiStatus: 'COLD' | 'NORMAL' | 'WARN' | 'ERROR' | 'EMERGENCY' | null;
  loading: boolean;
  gaugeOptions: {
    rpm: GaugeOptions | null;
    temperature: GaugeOptions | null;
    // batery: GaugeOptions | null;
  };
}

function state(): DashboardInterface {
  return {
    rpm: null,
    temperature: null,
    battery: null,
    advance: null,
    efiStatus: null,
    gaugeOptions: {
      rpm: null,
      temperature: null,
    },
    loading: false,
  };
}

export default state;
