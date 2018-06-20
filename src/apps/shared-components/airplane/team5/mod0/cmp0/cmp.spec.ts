
import { Cmp500Component } from './cmp';
describe('Cmp500Component', () => {
  it('should add', () => {
    expect(new Cmp500Component().add500(1)).toBe(501);
  });
});