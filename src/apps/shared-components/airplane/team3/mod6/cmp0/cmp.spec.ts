
import { Cmp360Component } from './cmp';
describe('Cmp360Component', () => {
  it('should add', () => {
    expect(new Cmp360Component().add360(1)).toBe(361);
  });
});