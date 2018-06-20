
import { Cmp25Component } from './cmp';
describe('Cmp25Component', () => {
  it('should add', () => {
    expect(new Cmp25Component().add25(1)).toBe(26);
  });
});