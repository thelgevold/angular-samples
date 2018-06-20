
import { Cmp511Component } from './cmp';
describe('Cmp511Component', () => {
  it('should add', () => {
    expect(new Cmp511Component().add511(1)).toBe(512);
  });
});