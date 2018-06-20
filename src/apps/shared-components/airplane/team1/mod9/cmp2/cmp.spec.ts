
import { Cmp192Component } from './cmp';
describe('Cmp192Component', () => {
  it('should add', () => {
    expect(new Cmp192Component().add192(1)).toBe(193);
  });
});