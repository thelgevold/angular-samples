
import { Cmp280Component } from './cmp';
describe('Cmp280Component', () => {
  it('should add', () => {
    expect(new Cmp280Component().add280(1)).toBe(281);
  });
});