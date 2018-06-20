
import { Cmp223Component } from './cmp';
describe('Cmp223Component', () => {
  it('should add', () => {
    expect(new Cmp223Component().add223(1)).toBe(224);
  });
});