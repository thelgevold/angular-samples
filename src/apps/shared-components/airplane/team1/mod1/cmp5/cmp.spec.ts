
import { Cmp115Component } from './cmp';
describe('Cmp115Component', () => {
  it('should add', () => {
    expect(new Cmp115Component().add115(1)).toBe(116);
  });
});