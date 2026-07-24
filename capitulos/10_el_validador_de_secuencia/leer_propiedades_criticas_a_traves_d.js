const { app } = require("premierepro");

async function readSequenceProperties() {
  const projects = await app.getProjectList();
  if (!projects || projects.length === 0) {
    throw new Error("No hay proyectos abiertos.");
  }

  const project  = projects[0];
  const sequence = project.activeSequence;

  if (!sequence) {
    throw new Error("No hay secuencia activa.");
  }

  return {
    name:            sequence.name,
    fps:             sequence.videoFrameRate,   // Ratio
    width:           sequence.frameSizeHorizontal,
    height:          sequence.frameSizeVertical,
    audioTrackCount: sequence.audioTracks ? sequence.audioTracks.numTracks : 0,
  };
}
