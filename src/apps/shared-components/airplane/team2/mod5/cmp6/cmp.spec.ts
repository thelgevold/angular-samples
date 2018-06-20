
import { Cmp256Component } from './cmp';
describe('Cmp256Component', () => {
  it('should add', () => {
    expect(new Cmp256Component().add256(1)).toBe(257);
  });
});