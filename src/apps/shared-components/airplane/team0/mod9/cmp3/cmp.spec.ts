
import { Cmp93Component } from './cmp';
describe('Cmp93Component', () => {
  it('should add', () => {
    expect(new Cmp93Component().add93(1)).toBe(94);
  });
});