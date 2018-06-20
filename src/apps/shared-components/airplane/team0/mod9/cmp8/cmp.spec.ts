
import { Cmp98Component } from './cmp';
describe('Cmp98Component', () => {
  it('should add', () => {
    expect(new Cmp98Component().add98(1)).toBe(99);
  });
});