// panel.js — lógica de reintento parcial
export async function retryFailedExports(report, callbacks) {
  const failedFormats = report.exportErrors.map(e => ({ preset: e.preset }));
  if (failedFormats.length === 0) return report;

  callbacks.onStateChange?.('exporting');
  const sequence    = await getSequenceByName(report.sequence.name);
  const retryResult = await exportSequence(sequence, failedFormats, callbacks.onProgress, callbacks.signal);

  const updatedReport = {
    ...report,
    exports:      [...report.exports, ...retryResult.files],
    exportErrors: retryResult.errors,
    totalTime:    report.totalTime + retryResult.totalTime
  };

  await saveUpdatedReport(updatedReport);

  callbacks.onStateChange?.(retryResult.errors.length === 0 ? 'export-completed' : 'export-failed');
  return updatedReport;
}
