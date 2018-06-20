
import { Cmp58Component } from './cmp';
describe('Cmp58Component', () => {
  it('should add', () => {
    expect(new Cmp58Component().add58(1)).toBe(59);
  });
});