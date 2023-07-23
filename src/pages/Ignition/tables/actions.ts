export const rpmLoadActions = {
  // estas quedarian dentro de memory/tables
  start: 'Ignition/requestIgnitionTableRPMTPS',
  success: 'Ignition/setTableRPM_TPS',
  error: 'Ignition/errorTableRPMTPS',
  update: 'Ignition/uploadTableRPMTPS',
  // estas solas tendrian que quedar
  storeUpdate: 'Ignition/updateTableRPMTPS',
  uploadResult: 'Ignition/checkUploadResult',
};
