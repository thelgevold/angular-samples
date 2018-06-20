
import { Cmp96Component } from './cmp';
describe('Cmp96Component', () => {
  it('should add', () => {
    expect(new Cmp96Component().add96(1)).toBe(97);
  });
});