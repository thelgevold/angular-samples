
import { Cmp92Component } from './cmp';
describe('Cmp92Component', () => {
  it('should add', () => {
    expect(new Cmp92Component().add92(1)).toBe(93);
  });
});