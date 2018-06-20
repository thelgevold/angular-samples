
import { Cmp911Component } from './cmp';
describe('Cmp911Component', () => {
  it('should add', () => {
    expect(new Cmp911Component().add911(1)).toBe(912);
  });
});