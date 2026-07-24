// script.js
const app = require('premierepro');

document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btn-ejecutar');
  const estado = document.getElementById('estado');

  boton.addEventListener('click', async () => {
    estado.textContent = 'Trabajando...';
    try {
      const proyecto = await app.Project.getActiveProject();
      if (proyecto) {
        estado.textContent = `Proyecto: ${proyecto.name}`;
      } else {
        estado.textContent = 'No hay proyecto abierto.';
      }
    } catch (error) {
      estado.textContent = `Error: ${error.message}`;
    }
  });
});
