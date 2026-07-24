async function inspectClip(item, spec) {
  // Saltar ítems que no son clips de video.
  if (item.type !== ProjectItemType.CLIP) return null;

  const frameRate = parseFloat(
    await item.getMediaProperty('VIDEO_FRAME_RATE')
  );
  const width  = parseInt(await item.getMediaProperty('VIDEO_FRAME_WIDTH'));
  const height = parseInt(await item.getMediaProperty('VIDEO_FRAME_HEIGHT'));
  const codec  = await item.getMediaProperty('VIDEO_CODEC');

  const issues = [];

  // Validar resolución
  const validRes = spec.video.resolutions.some(
    r => r.width === width && r.height === height
  );
  if (!validRes) {
    issues.push({
      type: 'resolution',
      found: `${width}x${height}`,
      expected: spec.video.resolutions
    });
  }

  // Validar framerate con tolerancia de punto flotante
  const validFR = spec.video.framerates.some(
    fr => Math.abs(fr - frameRate) < 0.01
  );
  if (!validFR) {
    issues.push({
      type: 'framerate',
      found: frameRate,
      expected: spec.video.framerates
    });
  }

  return {
    item,
    issues,
    status: issues.length === 0 ? 'approved' : 'flagged'
  };
}
