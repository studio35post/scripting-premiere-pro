// state-machine.js
const TRANSITIONS = {
  'idle':               ['validating'],
  'validating':         ['validation-failed', 'validation-passed'],
  'validation-failed':  ['idle'],
  'validation-passed':  ['exporting'],
  'exporting':          ['export-failed', 'export-completed'],
  'export-failed':      ['idle', 'exporting'],    // idle=abortar, exporting=reintentar
  'export-completed':   ['reporting'],
  'reporting':          ['done'],
  'done':               ['idle']
};

export class DeliveryStateMachine {
  constructor(initialState = 'idle') {
    this.state = initialState;
    this._listeners = [];
  }

  transition(newState) {
    const allowed = TRANSITIONS[this.state];
    if (!allowed || !allowed.includes(newState)) {
      throw new Error(`Transición no permitida: ${this.state} → ${newState}`);
    }
    const prev = this.state;
    this.state = newState;
    this._listeners.forEach(fn => fn(newState, prev));
  }

  onChange(fn) {
    this._listeners.push(fn);
    // devuelve función para desuscribirse
    return () => { this._listeners = this._listeners.filter(l => l !== fn); };
  }
}
