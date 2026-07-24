async function processBatch(clips, spec) {
  const BATCH_SIZE = 8;
  const results = [];

  for (let i = 0; i < clips.length; i += BATCH_SIZE) {
    const batch = clips.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(
      batch.map(clip => inspectClip(clip, spec))
    );
    results.push(...batchResults.filter(Boolean));
  }

  return results;
}
