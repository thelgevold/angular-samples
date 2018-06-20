
import { Cmp32Component } from './cmp';
describe('Cmp32Component', () => {
  it('should add', () => {
    expect(new Cmp32Component().add32(1)).toBe(33);
  });
});