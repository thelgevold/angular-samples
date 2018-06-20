
import { Cmp99Component } from './cmp';
describe('Cmp99Component', () => {
  it('should add', () => {
    expect(new Cmp99Component().add99(1)).toBe(100);
  });
});