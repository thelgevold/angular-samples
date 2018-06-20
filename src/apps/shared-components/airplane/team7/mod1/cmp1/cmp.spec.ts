
import { Cmp711Component } from './cmp';
describe('Cmp711Component', () => {
  it('should add', () => {
    expect(new Cmp711Component().add711(1)).toBe(712);
  });
});