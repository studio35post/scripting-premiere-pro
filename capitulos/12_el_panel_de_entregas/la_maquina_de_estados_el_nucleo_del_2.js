// tests/state-machine.test.js
import { DeliveryStateMachine } from '../src/state-machine.js';

test('transición válida avanza el estado', () => {
  const sm = new DeliveryStateMachine();
  sm.transition('validating');
  expect(sm.state).toBe('validating');
});

test('transición inválida lanza error', () => {
  const sm = new DeliveryStateMachine();
  expect(() => sm.transition('done')).toThrow('Transición no permitida');
});

test('notifica listeners en cada cambio', () => {
  const sm = new DeliveryStateMachine();
  const log = [];
  sm.onChange((state) => log.push(state));
  sm.transition('validating');
  sm.transition('validation-passed');
  expect(log).toEqual(['validating', 'validation-passed']);
});
