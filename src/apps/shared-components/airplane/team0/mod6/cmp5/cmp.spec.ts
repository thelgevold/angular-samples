
import { Cmp65Component } from './cmp';
describe('Cmp65Component', () => {
  it('should add', () => {
    expect(new Cmp65Component().add65(1)).toBe(66);
  });
});