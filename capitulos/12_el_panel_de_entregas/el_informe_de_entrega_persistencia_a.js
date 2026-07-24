// reporter.js
import * as uxpFs from 'uxp.storage.localFileSystem';

export async function generateReport(sequence, validation, exportResult, profile) {
  const report = {
    id:        crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    profile:   profile.name,
    sequence: {
      name:       sequence.name,
      duration:   sequence.end - sequence.zeroPoint,
      frameRate:  sequence.videoFrameRate.toString(),
      resolution: `${sequence.frameSizeHorizontal}x${sequence.frameSizeVertical}`
    },
    validation: {
      passed: validation.passed,
      rules:  validation.errors
    },
    exports:      exportResult.files,
    exportErrors: exportResult.errors,
    totalTime:    exportResult.totalTime
  };

  const dir      = await getReportsDir();
  const baseName = `delivery_${report.timestamp.replace(/[:.]/g, '-')}`;

  await writeText(`${dir}/${baseName}.json`, JSON.stringify(report, null, 2));
  await writeText(`${dir}/${baseName}.html`, renderHTML(report));

  await appendToDeliveryLog(report);

  return report;
}
