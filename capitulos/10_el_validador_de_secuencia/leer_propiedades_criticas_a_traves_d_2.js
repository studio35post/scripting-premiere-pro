async function readClipList(sequence) {
  const clips = [];
  const videoTracks = sequence.videoTracks;

  for (let t = 0; t < videoTracks.numTracks; t++) {
    const track = videoTracks[t];
    for (let c = 0; c < track.clips.numItems; c++) {
      const clip = track.clips[c];
      clips.push({
        name:      clip.name,
        trackIndex: t,
        projectItem: clip.projectItem ?? null,
      });
    }
  }
  return clips;
}
