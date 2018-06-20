
import { Cmp960Component } from './cmp';
describe('Cmp960Component', () => {
  it('should add', () => {
    expect(new Cmp960Component().add960(1)).toBe(961);
  });
});