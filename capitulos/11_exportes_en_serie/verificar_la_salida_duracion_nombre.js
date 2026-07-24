async function esperarArchivo(ruta, timeoutMs = 3600000) {
  const INTERVALO_MS = 5000;
  const inicio = Date.now();

  while (Date.now() - inicio < timeoutMs) {
    if (await archivoCompletado(ruta)) return true;
    await esperar(INTERVALO_MS);
  }
  throw new Error(`Tiempo de espera superado: ${ruta}`);
}

async function archivoCompletado(ruta) {
  try {
    const stat1 = await fs.stat(ruta);
    await esperar(2000);
    const stat2 = await fs.stat(ruta);
    return stat1.size > 0 && stat1.size === stat2.size;
  } catch {
    return false;
  }
}
