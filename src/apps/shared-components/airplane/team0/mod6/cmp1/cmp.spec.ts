
import { Cmp61Component } from './cmp';
describe('Cmp61Component', () => {
  it('should add', () => {
    expect(new Cmp61Component().add61(1)).toBe(62);
  });
});