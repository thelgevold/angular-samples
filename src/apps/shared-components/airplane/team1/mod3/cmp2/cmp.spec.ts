
import { Cmp132Component } from './cmp';
describe('Cmp132Component', () => {
  it('should add', () => {
    expect(new Cmp132Component().add132(1)).toBe(133);
  });
});