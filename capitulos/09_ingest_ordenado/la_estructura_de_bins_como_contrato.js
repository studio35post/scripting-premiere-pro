async function ensureBinTree(project) {
  const root = project.rootItem;

  const aprobado = findOrCreateBin(root, '[APROBADO]');
  const pendiente = findOrCreateBin(root, '[PENDIENTE]');
  const rechazado = findOrCreateBin(root, '[RECHAZADO]');

  return { aprobado, pendiente, rechazado };
}

function findOrCreateBin(parent, name) {
  for (const child of parent.children) {
    if (child.type === ProjectItemType.BIN && child.name === name) {
      return child;
    }
  }
  return parent.createBin(name);
}
