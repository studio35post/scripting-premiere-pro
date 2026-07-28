// Inventario de la secuencia activa, pista a pista.
// Pensado para ejecutarse desde la logica de un panel UXP (ver panel_minimo).
const premierepro = require("premierepro");

/** Devuelve un resumen de la secuencia activa, sin modificar nada. */
async function inventoryActiveSequence() {
  const project = await premierepro.Project.getActiveProject();
  if (!project) {
    return { error: "No hay proyecto abierto." };
  }

  const sequence = await project.getActiveSequence();
  if (!sequence) {
    return { error: "No hay secuencia activa." };
  }

  const resumen = {
    sequence: await sequence.getName(),
    videoTracks: [],
    audioTracks: [],
  };

  const videoCount = await sequence.getVideoTrackCount();
  for (let i = 0; i < videoCount; i++) {
    const track = await sequence.getVideoTrack(i);
    const items = await track.getTrackItems(1, false);
    const nombres = [];
    for (const item of items) {
      nombres.push(await item.getName());
    }
    resumen.videoTracks.push({ index: i + 1, clips: nombres });
  }

  const audioCount = await sequence.getAudioTrackCount();
  for (let i = 0; i < audioCount; i++) {
    const track = await sequence.getAudioTrack(i);
    const items = await track.getTrackItems(1, false);
    resumen.audioTracks.push({ index: i + 1, clips: items.length });
  }

  return resumen;
}

module.exports = { inventoryActiveSequence };
