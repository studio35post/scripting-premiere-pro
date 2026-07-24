async function exportarParaTodos(destinatarios, carpetaSalida) {
  const exportaciones = [];

  for (const destinatario of destinatarios) {
    try {
      const resultado = await lanzarExportacion(destinatario, carpetaSalida);
      exportaciones.push({ destinatario, ...resultado, estado: "encolado" });
    } catch (err) {
      exportaciones.push({ destinatario, estado: "error", mensaje: err.message });
    }
  }

  return exportaciones;
}
