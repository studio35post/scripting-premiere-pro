// Nombre de ejemplo: SC01_CAM_A_TOMA_003.MXF
const SCENE_PATTERN = /^SC(\d{2})_CAM_([A-Z])_/;

function extractSceneInfo(clipName) {
  const match = clipName.match(SCENE_PATTERN);
  if (!match) return null;
  return {
    scene:  match[1],  // '01'
    camera: match[2]   // 'A'
  };
}
