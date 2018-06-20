
import { Cmp52Component } from './cmp';
describe('Cmp52Component', () => {
  it('should add', () => {
    expect(new Cmp52Component().add52(1)).toBe(53);
  });
});