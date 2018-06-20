
import { Cmp20Component } from './cmp';
describe('Cmp20Component', () => {
  it('should add', () => {
    expect(new Cmp20Component().add20(1)).toBe(21);
  });
});