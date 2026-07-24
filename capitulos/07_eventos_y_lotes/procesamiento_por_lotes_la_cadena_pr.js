function aplicarATodasLasSecuencias(operacion) {
    var proyecto = app.project;
    var errores = [];

    for (var i = 0; i < proyecto.sequences.numSequences; i++) {
        var seq = proyecto.sequences[i];
        try {
            operacion(seq);
        } catch (e) {
            errores.push({
                nombre: seq.name,
                error: e.toString()
            });
        }
    }

    return errores;
}
