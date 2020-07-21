/**
 * @jest-environment jsdom
 */
import { touchedFunction } from '../src/useForm/utils';

test('Touched Function return', () => {
  const returnTouched = touchedFunction({ nome: '', email: '' });
  expect(returnTouched.nome).toBe(false);
  console.log(returnTouched);
});
