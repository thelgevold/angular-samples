
import { Cmp825Component } from './cmp';
describe('Cmp825Component', () => {
  it('should add', () => {
    expect(new Cmp825Component().add825(1)).toBe(826);
  });
});