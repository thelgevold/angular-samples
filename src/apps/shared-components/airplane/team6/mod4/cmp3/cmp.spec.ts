
import { Cmp643Component } from './cmp';
describe('Cmp643Component', () => {
  it('should add', () => {
    expect(new Cmp643Component().add643(1)).toBe(644);
  });
});