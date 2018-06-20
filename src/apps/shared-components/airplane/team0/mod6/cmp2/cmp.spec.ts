
import { Cmp62Component } from './cmp';
describe('Cmp62Component', () => {
  it('should add', () => {
    expect(new Cmp62Component().add62(1)).toBe(63);
  });
});