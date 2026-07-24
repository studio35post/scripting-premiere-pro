const app = require('premierepro');

const project = await app.Project.getActiveProject();
const sequence = await project.getActiveSequence();

if (typeof sequence.someNewMethod === 'function') {
  await sequence.someNewMethod(params);
} else {
  // ruta alternativa o notificación al usuario
  showCompatibilityWarning('Esta función requiere una versión más reciente de Premiere Pro.');
}
