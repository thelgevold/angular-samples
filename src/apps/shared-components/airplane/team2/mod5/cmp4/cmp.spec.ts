
import { Cmp254Component } from './cmp';
describe('Cmp254Component', () => {
  it('should add', () => {
    expect(new Cmp254Component().add254(1)).toBe(255);
  });
});