
import { Cmp583Component } from './cmp';
describe('Cmp583Component', () => {
  it('should add', () => {
    expect(new Cmp583Component().add583(1)).toBe(584);
  });
});