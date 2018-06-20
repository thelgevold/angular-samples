
import { Cmp82Component } from './cmp';
describe('Cmp82Component', () => {
  it('should add', () => {
    expect(new Cmp82Component().add82(1)).toBe(83);
  });
});