
import { Cmp60Component } from './cmp';
describe('Cmp60Component', () => {
  it('should add', () => {
    expect(new Cmp60Component().add60(1)).toBe(61);
  });
});