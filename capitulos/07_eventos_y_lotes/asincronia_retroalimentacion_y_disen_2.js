async function procesarSecuenciasEnLote(secuencias, operacion) {
    const errores = [];

    for (const seq of secuencias) {
        try {
            await operacion(seq);
        } catch (e) {
            errores.push({ nombre: seq.name, error: e.message });
        }
    }

    return errores;
}
