
import { Cmp404Component } from './cmp';
describe('Cmp404Component', () => {
  it('should add', () => {
    expect(new Cmp404Component().add404(1)).toBe(405);
  });
});