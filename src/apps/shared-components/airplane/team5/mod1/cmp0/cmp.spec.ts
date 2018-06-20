
import { Cmp510Component } from './cmp';
describe('Cmp510Component', () => {
  it('should add', () => {
    expect(new Cmp510Component().add510(1)).toBe(511);
  });
});