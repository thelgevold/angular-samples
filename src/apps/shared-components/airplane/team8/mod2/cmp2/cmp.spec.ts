
import { Cmp822Component } from './cmp';
describe('Cmp822Component', () => {
  it('should add', () => {
    expect(new Cmp822Component().add822(1)).toBe(823);
  });
});