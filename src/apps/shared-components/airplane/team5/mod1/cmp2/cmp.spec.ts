
import { Cmp512Component } from './cmp';
describe('Cmp512Component', () => {
  it('should add', () => {
    expect(new Cmp512Component().add512(1)).toBe(513);
  });
});