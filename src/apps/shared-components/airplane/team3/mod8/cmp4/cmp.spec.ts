
import { Cmp384Component } from './cmp';
describe('Cmp384Component', () => {
  it('should add', () => {
    expect(new Cmp384Component().add384(1)).toBe(385);
  });
});