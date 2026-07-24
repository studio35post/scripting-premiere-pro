// script dentro de index.html
import { DeliveryStateMachine } from './state-machine.js';
import { runDelivery }          from './panel.js';
import { getSelectedSequence, getSelectedProfile } from './ui-helpers.js';

const machine = new DeliveryStateMachine();
const root    = document.getElementById('delivery-root');

machine.onChange((state) => {
  root.setAttribute('data-state', state);
  updateStatusLabel(state);
  updateActionButtons(state);
});

async function handleStartButton() {
  const sequence = await getSelectedSequence();
  const profile  = getSelectedProfile();

  await runDelivery(sequence, profile, {
    onStateChange: (s) => machine.transition(s),
    onProgress:    (phase, step, pct) => updateProgressBar(step, pct)
  });
}
