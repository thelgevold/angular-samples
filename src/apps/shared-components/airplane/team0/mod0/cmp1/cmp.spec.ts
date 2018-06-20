
import { Cmp1Component } from './cmp';
describe('Cmp1Component', () => {
  it('should add', () => {
    expect(new Cmp1Component().add1(1)).toBe(2);
  });
});