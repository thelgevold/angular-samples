
import { Cmp88Component } from './cmp';
describe('Cmp88Component', () => {
  it('should add', () => {
    expect(new Cmp88Component().add88(1)).toBe(89);
  });
});