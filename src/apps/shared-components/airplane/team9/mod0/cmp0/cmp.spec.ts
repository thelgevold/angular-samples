
import { Cmp900Component } from './cmp';
describe('Cmp900Component', () => {
  it('should add', () => {
    expect(new Cmp900Component().add900(1)).toBe(901);
  });
});