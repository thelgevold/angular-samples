
import { Cmp85Component } from './cmp';
describe('Cmp85Component', () => {
  it('should add', () => {
    expect(new Cmp85Component().add85(1)).toBe(86);
  });
});