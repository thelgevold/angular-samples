
import { Cmp121Component } from './cmp';
describe('Cmp121Component', () => {
  it('should add', () => {
    expect(new Cmp121Component().add121(1)).toBe(122);
  });
});