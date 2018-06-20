
import { Cmp999Component } from './cmp';
describe('Cmp999Component', () => {
  it('should add', () => {
    expect(new Cmp999Component().add999(1)).toBe(1000);
  });
});