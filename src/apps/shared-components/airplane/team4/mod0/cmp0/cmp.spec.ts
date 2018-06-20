
import { Cmp400Component } from './cmp';
describe('Cmp400Component', () => {
  it('should add', () => {
    expect(new Cmp400Component().add400(1)).toBe(401);
  });
});