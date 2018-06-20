
import { Cmp42Component } from './cmp';
describe('Cmp42Component', () => {
  it('should add', () => {
    expect(new Cmp42Component().add42(1)).toBe(43);
  });
});