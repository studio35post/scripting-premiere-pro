let abortController = null;

async function handleStartButton() {
  abortController = new AbortController();

  try {
    await runDelivery(sequence, profile, {
      onStateChange: (s) => machine.transition(s),
      onProgress:    (step, pct) => updateProgressBar(step, pct),
      signal:        abortController.signal
    });
  } catch (err) {
    if (err.name === 'AbortError') {
      machine.transition('idle');
    } else {
      showError(err.message);
    }
  }
}

function handleCancelButton() {
  abortController?.abort();
}
