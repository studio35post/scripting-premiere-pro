async function appendToDeliveryLog(report) {
  const logPath = await getDeliveryLogPath(); // p. ej. proyecto/delivery-log.jsonl
  const entry   = JSON.stringify({
    id:           report.id,
    timestamp:    report.timestamp,
    profile:      report.profile,
    sequence:     report.sequence.name,
    status:       report.validation.passed ? 'success' : 'validation-failed',
    exportErrors: report.exportErrors.length
  });
  await appendToFile(logPath, entry + '\n');
}
