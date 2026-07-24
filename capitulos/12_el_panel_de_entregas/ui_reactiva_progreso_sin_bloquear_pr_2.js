// Fragmento de exporter.js con callback de progreso
async function exportSequence(sequence, formats, onProgress, signal) {
  const results = [];

  for (let i = 0; i < formats.length; i++) {
    if (signal?.aborted) throw new DOMException('Export cancelado', 'AbortError');

    const format = formats[i];
    onProgress?.(`Exportando ${format.preset}…`, (i / formats.length) * 100);

    const result = await exportSingleFormat(sequence, format);
    results.push(result);
  }

  onProgress?.('Completado', 100);
  return buildExportResult(results);
}
