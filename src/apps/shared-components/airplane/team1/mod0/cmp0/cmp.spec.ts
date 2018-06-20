
import { Cmp100Component } from './cmp';
describe('Cmp100Component', () => {
  it('should add', () => {
    expect(new Cmp100Component().add100(1)).toBe(101);
  });
});