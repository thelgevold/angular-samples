
import { Cmp303Component } from './cmp';
describe('Cmp303Component', () => {
  it('should add', () => {
    expect(new Cmp303Component().add303(1)).toBe(304);
  });
});