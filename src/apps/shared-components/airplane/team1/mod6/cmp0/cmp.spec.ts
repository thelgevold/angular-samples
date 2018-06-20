
import { Cmp160Component } from './cmp';
describe('Cmp160Component', () => {
  it('should add', () => {
    expect(new Cmp160Component().add160(1)).toBe(161);
  });
});