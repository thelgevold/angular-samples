
import { Cmp437Component } from './cmp';
describe('Cmp437Component', () => {
  it('should add', () => {
    expect(new Cmp437Component().add437(1)).toBe(438);
  });
});