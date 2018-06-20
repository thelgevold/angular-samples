
import { Cmp595Component } from './cmp';
describe('Cmp595Component', () => {
  it('should add', () => {
    expect(new Cmp595Component().add595(1)).toBe(596);
  });
});