
import { Cmp74Component } from './cmp';
describe('Cmp74Component', () => {
  it('should add', () => {
    expect(new Cmp74Component().add74(1)).toBe(75);
  });
});