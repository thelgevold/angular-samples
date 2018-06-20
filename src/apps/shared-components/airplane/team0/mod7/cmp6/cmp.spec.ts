
import { Cmp76Component } from './cmp';
describe('Cmp76Component', () => {
  it('should add', () => {
    expect(new Cmp76Component().add76(1)).toBe(77);
  });
});