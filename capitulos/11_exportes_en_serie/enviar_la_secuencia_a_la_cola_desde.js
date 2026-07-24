// encola.jsx — ejecutado por evalScript desde el panel CEP
function encolarExportacion(presetAbsoluto, salidaAbsoluta) {
  var secuencia = app.project.activeSequence;
  if (!secuencia) {
    return JSON.stringify({ error: "No hay secuencia activa" });
  }

  // Garantizar que Media Encoder está en ejecución
  app.encoder.launchEncoder();

  // Encolar: secuencia completa, iniciar cola inmediatamente
  var resultado = app.encoder.encodeSequence(
    secuencia,
    salidaAbsoluta,
    presetAbsoluto,
    app.encoder.ENCODE_ENTIRE,
    true
  );

  return JSON.stringify({
    ok: resultado !== null,
    salidaEsperada: salidaAbsoluta
  });
}
