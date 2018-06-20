
import { Cmp64Component } from './cmp';
describe('Cmp64Component', () => {
  it('should add', () => {
    expect(new Cmp64Component().add64(1)).toBe(65);
  });
});