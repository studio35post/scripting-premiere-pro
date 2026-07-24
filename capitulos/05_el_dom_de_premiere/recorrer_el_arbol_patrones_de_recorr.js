var proj = app.project;

for (var s = 0; s < proj.sequences.numSequences; s++) {
    var seq = proj.sequences[s];

    for (var v = 0; v < seq.videoTracks.numTracks; v++) {
        var pista = seq.videoTracks[v];

        for (var c = 0; c < pista.clips.numItems; c++) {
            var clip = pista.clips[c];
            $.writeln(clip.name + " @ " + clip.start.seconds + "s");
        }
    }
}
