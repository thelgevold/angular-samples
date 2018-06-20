
import { Cmp255Component } from './cmp';
describe('Cmp255Component', () => {
  it('should add', () => {
    expect(new Cmp255Component().add255(1)).toBe(256);
  });
});