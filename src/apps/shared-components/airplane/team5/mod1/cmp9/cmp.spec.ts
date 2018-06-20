
import { Cmp519Component } from './cmp';
describe('Cmp519Component', () => {
  it('should add', () => {
    expect(new Cmp519Component().add519(1)).toBe(520);
  });
});