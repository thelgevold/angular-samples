
import { Cmp63Component } from './cmp';
describe('Cmp63Component', () => {
  it('should add', () => {
    expect(new Cmp63Component().add63(1)).toBe(64);
  });
});