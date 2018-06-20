
import { Cmp211Component } from './cmp';
describe('Cmp211Component', () => {
  it('should add', () => {
    expect(new Cmp211Component().add211(1)).toBe(212);
  });
});