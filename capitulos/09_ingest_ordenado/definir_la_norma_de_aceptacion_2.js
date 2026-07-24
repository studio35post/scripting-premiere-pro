async function loadProjectSpec() {
  const fs = require('uxp').storage.localFileSystem;
  try {
    const configFile = await fs.getEntryWithUrl('plugin:/config/spec.json');
    const content = await configFile.read();
    return JSON.parse(content);
  } catch (e) {
    console.warn('Spec config no encontrada, usando valores predeterminados');
    return DEFAULT_SPEC;
  }
}
