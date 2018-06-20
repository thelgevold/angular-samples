
import { Cmp2Component } from './cmp';
describe('Cmp2Component', () => {
  it('should add', () => {
    expect(new Cmp2Component().add2(1)).toBe(3);
  });
});