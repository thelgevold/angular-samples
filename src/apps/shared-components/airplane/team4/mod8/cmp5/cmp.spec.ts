
import { Cmp485Component } from './cmp';
describe('Cmp485Component', () => {
  it('should add', () => {
    expect(new Cmp485Component().add485(1)).toBe(486);
  });
});