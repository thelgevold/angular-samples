
import { Cmp91Component } from './cmp';
describe('Cmp91Component', () => {
  it('should add', () => {
    expect(new Cmp91Component().add91(1)).toBe(92);
  });
});