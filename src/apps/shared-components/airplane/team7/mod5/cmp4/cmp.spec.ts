
import { Cmp754Component } from './cmp';
describe('Cmp754Component', () => {
  it('should add', () => {
    expect(new Cmp754Component().add754(1)).toBe(755);
  });
});