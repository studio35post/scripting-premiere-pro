var exporter = app.encoder;

exporter.bind("onEncoderJobComplete", function(jobId, outputPath) {
    registrarExportacion(jobId, outputPath);
});

exporter.bind("onEncoderJobError", function(jobId, errorCode) {
    registrarError(jobId, errorCode);
});

for (var i = 0; i < sequences.numSequences; i++) {
    exporter.encodeSequence(
        sequences[i],
        carpetaSalida + "/" + sequences[i].name + ".mp4",
        rutaPreset,
        app.encoder.ENCODE_IN_TO_OUT
    );
}

exporter.startBatch();
