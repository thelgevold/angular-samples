
import { Cmp252Component } from './cmp';
describe('Cmp252Component', () => {
  it('should add', () => {
    expect(new Cmp252Component().add252(1)).toBe(253);
  });
});