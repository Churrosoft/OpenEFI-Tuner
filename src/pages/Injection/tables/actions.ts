export const VETableActions = {
  // estas quedarian dentro de memory/tables
  start: 'Injection/requestInjectionTableRPMTPS',
  success: 'Injection/setTableRPM_TPS',
  error: 'Injection/errorTableRPMTPS',
  update: 'Injection/uploadTableRPMTPS',
  // estas solas tendrian que quedar
  storeUpdate: 'Injection/pathTableRPM_TPS',
  uploadResult: 'Injection/checkUploadResult',
};

// el resto salvo caso muy raro quedaria asi luego del refactor:
export const AFRTableActions = {
  start: 'Injection/requestTable',
  success: 'Injection/getTable',
  error: 'Injection/errorTable',
  update: 'Injection/pathTable',
  uploadResult: 'Injection/checkUploadResult',
};
