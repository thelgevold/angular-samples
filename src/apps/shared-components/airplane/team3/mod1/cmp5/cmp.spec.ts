
import { Cmp315Component } from './cmp';
describe('Cmp315Component', () => {
  it('should add', () => {
    expect(new Cmp315Component().add315(1)).toBe(316);
  });
});