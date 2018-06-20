
import { Cmp432Component } from './cmp';
describe('Cmp432Component', () => {
  it('should add', () => {
    expect(new Cmp432Component().add432(1)).toBe(433);
  });
});