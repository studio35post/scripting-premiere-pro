async function previewIngest(project, spec) {
  const allClips = getVideoClips(project.rootItem);
  const results = await processBatch(allClips, spec);

  return {
    total: results.length,
    approved: results.filter(r => r.status === 'approved').length,
    flagged:  results.filter(r => r.status === 'flagged').length,
    issues: results
      .filter(r => r.issues.length > 0)
      .map(r => ({
        name: r.item.name,
        problems: r.issues
      }))
  };
}
