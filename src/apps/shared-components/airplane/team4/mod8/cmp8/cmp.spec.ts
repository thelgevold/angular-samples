
import { Cmp488Component } from './cmp';
describe('Cmp488Component', () => {
  it('should add', () => {
    expect(new Cmp488Component().add488(1)).toBe(489);
  });
});