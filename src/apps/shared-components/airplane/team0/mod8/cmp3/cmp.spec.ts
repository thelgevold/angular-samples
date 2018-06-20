
import { Cmp83Component } from './cmp';
describe('Cmp83Component', () => {
  it('should add', () => {
    expect(new Cmp83Component().add83(1)).toBe(84);
  });
});