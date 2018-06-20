
import { Cmp125Component } from './cmp';
describe('Cmp125Component', () => {
  it('should add', () => {
    expect(new Cmp125Component().add125(1)).toBe(126);
  });
});