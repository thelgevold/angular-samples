
import { Cmp168Component } from './cmp';
describe('Cmp168Component', () => {
  it('should add', () => {
    expect(new Cmp168Component().add168(1)).toBe(169);
  });
});