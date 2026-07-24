function renderHTML(report) {
  const exportRows = report.exports
    .map(f => `<tr>
      <td>${f.preset}</td>
      <td>${f.outputPath}</td>
      <td>${formatBytes(f.fileSize)}</td>
      <td>${formatMs(f.processingTime)}</td>
    </tr>`)
    .join('');

  const statusClass = report.validation.passed ? 'status-ok' : 'status-fail';
  const statusLabel = report.validation.passed ? 'APROBADO' : 'FALLIDO';

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Informe de entrega — ${report.sequence.name}</title>
  <style>
    body { font-family: sans-serif; max-width: 820px; margin: 2rem auto; color: #222; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
    th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
    .status-ok   { color: #1a7a1a; font-weight: bold; }
    .status-fail { color: #b30000; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Informe de entrega</h1>
  <p>Secuencia: <strong>${report.sequence.name}</strong></p>
  <p>Perfil: ${report.profile} &nbsp;|&nbsp; Fecha: ${new Date(report.timestamp).toLocaleString('es')}</p>
  <p>Validación: <span class="${statusClass}">${statusLabel}</span></p>
  <h2>Archivos generados</h2>
  <table>
    <tr><th>Preset</th><th>Ruta</th><th>Tamaño</th><th>Tiempo</th></tr>
    ${exportRows || '<tr><td colspan="4">Ninguno.</td></tr>'}
  </table>
  ${report.exportErrors.length
    ? `<h2>Errores de exportación</h2><ul>${report.exportErrors.map(e =>
        `<li><strong>${e.preset}</strong>: ${e.message}</li>`).join('')}</ul>`
    : ''
  }
  <p><em>Tiempo total: ${formatMs(report.totalTime)}</em></p>
</body>
</html>`;
}
