
import { Cmp565Component } from './cmp';
describe('Cmp565Component', () => {
  it('should add', () => {
    expect(new Cmp565Component().add565(1)).toBe(566);
  });
});