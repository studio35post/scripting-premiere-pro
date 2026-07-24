function procesarConProgreso(elementos, operacion) {
    var errores = [];
    var total = elementos.length;

    for (var i = 0; i < total; i++) {
        try {
            operacion(elementos[i]);
        } catch (e) {
            errores.push({ indice: i, error: e.toString() });
        }

        // Notificar progreso cada 10 elementos
        if (i % 10 === 0 || i === total - 1) {
            var progreso = Math.round(((i + 1) / total) * 100);
            var eventObj = new CSXSEvent();
            eventObj.type = "studio35.progreso";
            eventObj.data = progreso.toString();
            eventObj.dispatch();
        }
    }

    return errores;
}
