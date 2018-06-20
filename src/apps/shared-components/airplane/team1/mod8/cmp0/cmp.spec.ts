
import { Cmp180Component } from './cmp';
describe('Cmp180Component', () => {
  it('should add', () => {
    expect(new Cmp180Component().add180(1)).toBe(181);
  });
});