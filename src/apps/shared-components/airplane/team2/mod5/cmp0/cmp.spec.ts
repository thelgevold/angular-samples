
import { Cmp250Component } from './cmp';
describe('Cmp250Component', () => {
  it('should add', () => {
    expect(new Cmp250Component().add250(1)).toBe(251);
  });
});