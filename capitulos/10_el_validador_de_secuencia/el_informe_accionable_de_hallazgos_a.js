function renderFindings(findings, container) {
  container.innerHTML = "";

  const groups = { error: [], warning: [], info: [] };
  findings.forEach(f => groups[f.severity].push(f));

  const labels = { error: "Errores", warning: "Advertencias", info: "Notas" };

  ["error", "warning", "info"].forEach(level => {
    if (groups[level].length === 0) return;

    const section = document.createElement("div");
    section.className = `findings-group findings-${level}`;

    const header = document.createElement("h3");
    header.textContent = `${labels[level]} (${groups[level].length})`;
    section.appendChild(header);

    groups[level].forEach(finding => {
      const item = document.createElement("div");
      item.className = "finding-item";

      const msg  = document.createElement("p");
      msg.className = "finding-message";
      msg.textContent = finding.message;

      const fix  = document.createElement("p");
      fix.className = "finding-fix";
      fix.textContent = finding.fix;

      item.appendChild(msg);
      item.appendChild(fix);
      section.appendChild(item);
    });

    container.appendChild(section);
  });
}
