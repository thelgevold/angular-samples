
import { Cmp608Component } from './cmp';
describe('Cmp608Component', () => {
  it('should add', () => {
    expect(new Cmp608Component().add608(1)).toBe(609);
  });
});