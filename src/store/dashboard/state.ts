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
export type IEfiStatus ='COLD' | 'NORMAL' | 'WARN' | 'ERROR' | 'EMERGENCY' | null;
export interface DashboardInterface {
  rpm: number | null;
  temperature: number | null;
  battery: number | null;
  advance: number | null;
  load: number | null;
  efiStatus:IEfiStatus;
  loading: boolean;
  gaugeOptions: {
    rpm: GaugeOptions | null;
    temperature: GaugeOptions | null;
    // batery: GaugeOptions | null;
  };
}

export const efiStatusMap = {
  0: 'COLD',
  1: 'NORMAL',
  2: 'WARN',
  3: 'ERROR',
  4: 'EMERGENCY',
};

function state(): DashboardInterface {
  return {
    rpm: null,
    temperature: null,
    battery: null,
    advance: null,
    load: null,
    efiStatus: null,
    gaugeOptions: {
      rpm: null,
      temperature: null,
    },
    loading: false,
  };
}

export default state;
