
import { Cmp127Component } from './cmp';
describe('Cmp127Component', () => {
  it('should add', () => {
    expect(new Cmp127Component().add127(1)).toBe(128);
  });
});