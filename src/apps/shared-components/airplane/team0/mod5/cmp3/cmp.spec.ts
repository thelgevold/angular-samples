
import { Cmp53Component } from './cmp';
describe('Cmp53Component', () => {
  it('should add', () => {
    expect(new Cmp53Component().add53(1)).toBe(54);
  });
});