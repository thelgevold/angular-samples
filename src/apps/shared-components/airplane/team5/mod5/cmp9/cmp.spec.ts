
import { Cmp559Component } from './cmp';
describe('Cmp559Component', () => {
  it('should add', () => {
    expect(new Cmp559Component().add559(1)).toBe(560);
  });
});