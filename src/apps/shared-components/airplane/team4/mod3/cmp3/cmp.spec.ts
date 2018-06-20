
import { Cmp433Component } from './cmp';
describe('Cmp433Component', () => {
  it('should add', () => {
    expect(new Cmp433Component().add433(1)).toBe(434);
  });
});