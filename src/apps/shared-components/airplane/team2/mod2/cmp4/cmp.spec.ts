
import { Cmp224Component } from './cmp';
describe('Cmp224Component', () => {
  it('should add', () => {
    expect(new Cmp224Component().add224(1)).toBe(225);
  });
});