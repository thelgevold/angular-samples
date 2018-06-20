
import { Cmp525Component } from './cmp';
describe('Cmp525Component', () => {
  it('should add', () => {
    expect(new Cmp525Component().add525(1)).toBe(526);
  });
});