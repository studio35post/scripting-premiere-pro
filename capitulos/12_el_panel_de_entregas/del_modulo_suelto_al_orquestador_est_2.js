// panel.js
import { validateSequence } from './validator.js';
import { exportSequence }   from './exporter.js';
import { generateReport }   from './reporter.js';

export async function runDelivery(sequence, deliveryProfile, callbacks = {}) {
  const { onProgress, onStateChange, signal } = callbacks;

  // Fase 1: validación
  onStateChange?.('validating');
  const validation = await validateSequence(sequence, deliveryProfile.rules);

  if (!validation.passed) {
    onStateChange?.('validation-failed');
    return { status: 'validation-failed', validation };
  }
  onStateChange?.('validation-passed');

  // Fase 2: exportación
  onStateChange?.('exporting');
  const exportResult = await exportSequence(
    sequence,
    deliveryProfile.formats,
    (step, pct) => onProgress?.('exporting', step, pct),
    signal
  );

  if (exportResult.errors.length > 0 && exportResult.files.length === 0) {
    onStateChange?.('export-failed');
    return { status: 'export-failed', exportResult };
  }
  onStateChange?.('export-completed');

  // Fase 3: informe
  onStateChange?.('reporting');
  const report = await generateReport(sequence, validation, exportResult, deliveryProfile);

  onStateChange?.('done');
  return { status: 'done', report };
}
