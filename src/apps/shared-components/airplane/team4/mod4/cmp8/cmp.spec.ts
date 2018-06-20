
import { Cmp448Component } from './cmp';
describe('Cmp448Component', () => {
  it('should add', () => {
    expect(new Cmp448Component().add448(1)).toBe(449);
  });
});