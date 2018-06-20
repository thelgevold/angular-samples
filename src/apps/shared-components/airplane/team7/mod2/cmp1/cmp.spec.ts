
import { Cmp721Component } from './cmp';
describe('Cmp721Component', () => {
  it('should add', () => {
    expect(new Cmp721Component().add721(1)).toBe(722);
  });
});