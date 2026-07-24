// Disponible en CEP a través de cep_node (Node.js integrado)
const { execFile } = require("child_process");

function leerDuracionConFfprobe(ruta) {
  return new Promise((resolve, reject) => {
    execFile("ffprobe", [
      "-v", "quiet",
      "-print_format", "json",
      "-show_format",
      ruta
    ], (error, stdout) => {
      if (error) return reject(error);
      const datos = JSON.parse(stdout);
      resolve(parseFloat(datos.format.duration));
    });
  });
}
