app.bind("afterOpenProject", function() {
    var inconsistentes = [];
    var sequences = app.project.sequences;

    for (var i = 0; i < sequences.numSequences; i++) {
        var seq = sequences[i];
        if (!tieneEspacioColorValido(seq)) {
            inconsistentes.push(seq);
        }
    }

    if (inconsistentes.length > 0) {
        aplicarEspacioColor(inconsistentes, "Rec. 709");
    }
});
