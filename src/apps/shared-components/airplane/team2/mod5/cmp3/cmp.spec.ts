
import { Cmp253Component } from './cmp';
describe('Cmp253Component', () => {
  it('should add', () => {
    expect(new Cmp253Component().add253(1)).toBe(254);
  });
});