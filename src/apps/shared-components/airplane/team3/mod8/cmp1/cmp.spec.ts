
import { Cmp381Component } from './cmp';
describe('Cmp381Component', () => {
  it('should add', () => {
    expect(new Cmp381Component().add381(1)).toBe(382);
  });
});