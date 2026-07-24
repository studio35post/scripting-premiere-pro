// src/state/validationState.js
let lastResult = null;

export function setValidationResult(result) {
  lastResult = result;
  document.dispatchEvent(
    new CustomEvent("validationUpdated", { detail: result })
  );
}

export function isSequenceValid() {
  if (!lastResult) return false;
  return lastResult.findings.filter(f => f.severity === "error").length === 0;
}
