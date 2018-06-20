
import { Cmp509Component } from './cmp';
describe('Cmp509Component', () => {
  it('should add', () => {
    expect(new Cmp509Component().add509(1)).toBe(510);
  });
});