
import { Cmp110Component } from './cmp';
describe('Cmp110Component', () => {
  it('should add', () => {
    expect(new Cmp110Component().add110(1)).toBe(111);
  });
});