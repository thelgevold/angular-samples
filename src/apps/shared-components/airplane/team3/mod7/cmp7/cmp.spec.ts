
import { Cmp377Component } from './cmp';
describe('Cmp377Component', () => {
  it('should add', () => {
    expect(new Cmp377Component().add377(1)).toBe(378);
  });
});