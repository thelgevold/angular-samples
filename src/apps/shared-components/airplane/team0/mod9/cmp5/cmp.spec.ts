
import { Cmp95Component } from './cmp';
describe('Cmp95Component', () => {
  it('should add', () => {
    expect(new Cmp95Component().add95(1)).toBe(96);
  });
});