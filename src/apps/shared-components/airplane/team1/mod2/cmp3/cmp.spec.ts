
import { Cmp123Component } from './cmp';
describe('Cmp123Component', () => {
  it('should add', () => {
    expect(new Cmp123Component().add123(1)).toBe(124);
  });
});