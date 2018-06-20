
import { Cmp300Component } from './cmp';
describe('Cmp300Component', () => {
  it('should add', () => {
    expect(new Cmp300Component().add300(1)).toBe(301);
  });
});