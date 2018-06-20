
import { Cmp3Component } from './cmp';
describe('Cmp3Component', () => {
  it('should add', () => {
    expect(new Cmp3Component().add3(1)).toBe(4);
  });
});