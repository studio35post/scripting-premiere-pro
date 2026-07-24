async function lanzarExportacion(destinatario, carpetaSalida) {
  const config = PRESETS[destinatario];
  if (!config) throw new Error(`Destinatario desconocido: ${destinatario}`);

  const presetRuta = resolverRutaExtension(config.presetFile);
  const nombreArchivo = construirNombre(destinatario, config.extension);
  const salidaRuta = `${carpetaSalida}/${nombreArchivo}`;

  const respuesta = await evalScript(
    `encolarExportacion(${JSON.stringify(presetRuta)}, ${JSON.stringify(salidaRuta)})`
  );
  const resultado = JSON.parse(respuesta);
  if (!resultado.ok) throw new Error(resultado.error || "Error al encolar");

  return { salidaRuta, nombreArchivo };
}
