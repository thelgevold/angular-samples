
import { Cmp15Component } from './cmp';
describe('Cmp15Component', () => {
  it('should add', () => {
    expect(new Cmp15Component().add15(1)).toBe(16);
  });
});