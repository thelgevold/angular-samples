
import { Cmp275Component } from './cmp';
describe('Cmp275Component', () => {
  it('should add', () => {
    expect(new Cmp275Component().add275(1)).toBe(276);
  });
});