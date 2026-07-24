function generateReport(results, timestamp) {
  const lines = [
    `INGEST REPORT — ${timestamp}`,
    `Total procesado: ${results.length} clips`,
    '',
    '--- APROBADOS ---',
    ...results
      .filter(r => r.status === 'approved')
      .map(r => `  OK  ${r.item.name}`),
    '',
    '--- PROBLEMAS ---',
    ...results
      .filter(r => r.status === 'flagged')
      .map(r => {
        const problems = r.issues
          .map(i => `${i.type}: encontrado ${i.found}`)
          .join('; ');
        return `  !!  ${r.item.name} — ${problems}`;
      })
  ];

  return lines.join('\n');
}
