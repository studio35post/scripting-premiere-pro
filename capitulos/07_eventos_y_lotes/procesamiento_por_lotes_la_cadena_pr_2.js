function aplicarLUTAClips(rutaLUT) {
    var errores = [];
    var sequences = app.project.sequences;

    for (var s = 0; s < sequences.numSequences; s++) {
        var seq = sequences[s];
        var videoTracks = seq.videoTracks;

        for (var t = 0; t < videoTracks.numTracks; t++) {
            var clips = videoTracks[t].clips;

            for (var c = 0; c < clips.numItems; c++) {
                var clip = clips[c];
                try {
                    var efectoColor = clip.components.getComponentNamed("Lumetri Color");
                    if (efectoColor) {
                        efectoColor.properties
                            .getParamForDisplayName("Input LUT")
                            .setValue(rutaLUT, true);
                    }
                } catch (e) {
                    errores.push({
                        clip: clip.name,
                        secuencia: seq.name,
                        error: e.toString()
                    });
                }
            }
        }
    }

    return errores;
}
