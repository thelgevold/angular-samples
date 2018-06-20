
import { Cmp386Component } from './cmp';
describe('Cmp386Component', () => {
  it('should add', () => {
    expect(new Cmp386Component().add386(1)).toBe(387);
  });
});