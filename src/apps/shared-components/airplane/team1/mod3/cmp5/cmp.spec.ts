
import { Cmp135Component } from './cmp';
describe('Cmp135Component', () => {
  it('should add', () => {
    expect(new Cmp135Component().add135(1)).toBe(136);
  });
});