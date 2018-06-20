
import { Cmp301Component } from './cmp';
describe('Cmp301Component', () => {
  it('should add', () => {
    expect(new Cmp301Component().add301(1)).toBe(302);
  });
});