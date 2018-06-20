
import { Cmp625Component } from './cmp';
describe('Cmp625Component', () => {
  it('should add', () => {
    expect(new Cmp625Component().add625(1)).toBe(626);
  });
});