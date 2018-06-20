
import { Cmp163Component } from './cmp';
describe('Cmp163Component', () => {
  it('should add', () => {
    expect(new Cmp163Component().add163(1)).toBe(164);
  });
});