
import { Cmp16Component } from './cmp';
describe('Cmp16Component', () => {
  it('should add', () => {
    expect(new Cmp16Component().add16(1)).toBe(17);
  });
});