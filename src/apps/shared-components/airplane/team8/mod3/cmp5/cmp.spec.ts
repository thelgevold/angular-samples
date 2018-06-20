
import { Cmp835Component } from './cmp';
describe('Cmp835Component', () => {
  it('should add', () => {
    expect(new Cmp835Component().add835(1)).toBe(836);
  });
});