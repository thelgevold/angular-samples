
import { Cmp555Component } from './cmp';
describe('Cmp555Component', () => {
  it('should add', () => {
    expect(new Cmp555Component().add555(1)).toBe(556);
  });
});