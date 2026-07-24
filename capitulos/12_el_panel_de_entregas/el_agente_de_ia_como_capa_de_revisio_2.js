// Listener en el panel
machine.onChange(async (state) => {
  if (state !== 'done') return;

  const aiSection = document.getElementById('ai-review');
  aiSection.textContent = 'Analizando informe…';

  const aiResult = await inspectDelivery(currentReport);
  renderAIReview(aiSection, aiResult);
});

function renderAIReview(container, result) {
  const issueHtml = result.issues
    .map(issue => `
      <div class="issue issue--${issue.severity}">
        <strong>${issue.field}</strong>: ${issue.description}
        <span class="suggestion">Sugerencia: ${issue.suggestion}</span>
      </div>`)
    .join('');

  container.innerHTML = `
    <h3>Revisión automática</h3>
    <p>${result.summary}</p>
    ${issueHtml || '<p>Sin observaciones.</p>'}
    ${result.needsRedelivery
      ? '<p class="redelivery-notice">Se recomienda revisar antes de entregar.</p>'
      : ''}
  `;
}
