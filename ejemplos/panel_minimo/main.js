// Panel UXP minimo: lee la secuencia activa y muestra un resumen.
// No modifica el proyecto. Punto de partida para herramientas propias.
const premierepro = require("premierepro");

const salida = document.getElementById("salida");

async function resumirSecuencia() {
  try {
    const project = await premierepro.Project.getActiveProject();
    if (!project) {
      salida.textContent = "No hay ningún proyecto abierto.";
      return;
    }

    const sequence = await project.getActiveSequence();
    if (!sequence) {
      salida.textContent = "Abre una secuencia para poder resumirla.";
      return;
    }

    const nombre = await sequence.getName();
    const videoTracks = await sequence.getVideoTrackCount();
    const audioTracks = await sequence.getAudioTrackCount();

    // Contar clips pista a pista: el dato que nadie mira hasta que sobra uno
    let totalClips = 0;
    for (let i = 0; i < videoTracks; i++) {
      const track = await sequence.getVideoTrack(i);
      const items = await track.getTrackItems(1, false);
      totalClips += items.length;
    }

    salida.textContent =
      `Secuencia: ${nombre}\n` +
      `Pistas de vídeo: ${videoTracks}\n` +
      `Pistas de audio: ${audioTracks}\n` +
      `Clips de vídeo: ${totalClips}`;
  } catch (error) {
    salida.textContent = `Error: ${error.message}`;
  }
}

document.getElementById("btn-info").addEventListener("click", resumirSecuencia);
