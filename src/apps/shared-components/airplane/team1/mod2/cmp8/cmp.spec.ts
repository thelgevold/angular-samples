
import { Cmp128Component } from './cmp';
describe('Cmp128Component', () => {
  it('should add', () => {
    expect(new Cmp128Component().add128(1)).toBe(129);
  });
});