// Contratos de modulos impresos en el capitulo 12: definen la interfaz
// (entradas, salidas y formas de los objetos) que el orquestador espera
// de validator.js (cap. 10) y exporter.js (cap. 11). Los tipos son
// anotaciones ilustrativas del libro, no codigo a ejecutar tal cual.

// validator.js
export async function validateSequence(sequence, rules) {
  // ...lógica del capítulo 10...
  return {
    passed: Boolean,
    errors: [{ rule: String, message: String, severity: 'error' | 'warning' }],
    checkedAt: new Date().toISOString()
  };
}

// exporter.js
export async function exportSequence(sequence, formats, onProgress, signal) {
  // ...lógica del capítulo 11...
  return {
    files: [{ preset: String, outputPath: String, fileSize: Number, processingTime: Number }],
    errors: [{ preset: String, message: String }],
    totalTime: Number
  };
}
