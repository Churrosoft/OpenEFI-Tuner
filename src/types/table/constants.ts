import { IGNITION_RPMTPS_SIZE } from 'src/config';

export const TABLE_REF_IGNITION_TPS_LOAD = 10;
export const TABLE_REF_IGNITION_TMP_LOAD = 0x3;
export const TABLE_REF_IGNITION_RPM_BATT = 0x4;

// main VE table
export const TABLE_REF_INJECTION_TPS_LOAD = 20;

// config tuner:
// eslint-disable-next-line prefer-const
export let TABLE_STATUS_INTERVAL = 50;

export const TABLE_TYPES = {
  IGNITION_RPM_TPS: 'IGNITION_RPM_TPS',
  INJECTION_RPM_TPS: 'INJECTION_RPM_TPS',
} as const;

export const TABLE_TYPES_MAPPING = {
  IGNITION_RPM_TPS: { id: TABLE_REF_IGNITION_TPS_LOAD, size: IGNITION_RPMTPS_SIZE },
  INJECTION_RPM_TPS: { id: TABLE_REF_INJECTION_TPS_LOAD, size: IGNITION_RPMTPS_SIZE },
} as const;
