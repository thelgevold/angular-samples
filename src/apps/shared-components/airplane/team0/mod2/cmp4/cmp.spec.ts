
import { Cmp24Component } from './cmp';
describe('Cmp24Component', () => {
  it('should add', () => {
    expect(new Cmp24Component().add24(1)).toBe(25);
  });
});