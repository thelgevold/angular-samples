
import { Cmp126Component } from './cmp';
describe('Cmp126Component', () => {
  it('should add', () => {
    expect(new Cmp126Component().add126(1)).toBe(127);
  });
});