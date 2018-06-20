
import { Cmp380Component } from './cmp';
describe('Cmp380Component', () => {
  it('should add', () => {
    expect(new Cmp380Component().add380(1)).toBe(381);
  });
});