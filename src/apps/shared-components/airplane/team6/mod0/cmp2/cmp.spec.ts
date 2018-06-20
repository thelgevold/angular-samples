
import { Cmp602Component } from './cmp';
describe('Cmp602Component', () => {
  it('should add', () => {
    expect(new Cmp602Component().add602(1)).toBe(603);
  });
});