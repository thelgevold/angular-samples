
import { Cmp850Component } from './cmp';
describe('Cmp850Component', () => {
  it('should add', () => {
    expect(new Cmp850Component().add850(1)).toBe(851);
  });
});