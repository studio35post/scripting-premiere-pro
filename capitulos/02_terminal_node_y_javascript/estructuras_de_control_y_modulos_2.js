// archivo: utilidades.js
function formatearTimecode(fotogramas, fps) {
  const horas = Math.floor(fotogramas / (fps * 3600));
  const minutos = Math.floor((fotogramas % (fps * 3600)) / (fps * 60));
  const segundos = Math.floor((fotogramas % (fps * 60)) / fps);
  const frames = Math.floor(fotogramas % fps);
  return `${horas}:${minutos}:${segundos}:${frames}`;
}
module.exports = { formatearTimecode };

// archivo: index.js
const { formatearTimecode } = require("./utilidades");
console.log(formatearTimecode(86400, 24)); // "1:0:0:0"
