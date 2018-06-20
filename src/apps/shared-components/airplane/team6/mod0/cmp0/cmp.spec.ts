
import { Cmp600Component } from './cmp';
describe('Cmp600Component', () => {
  it('should add', () => {
    expect(new Cmp600Component().add600(1)).toBe(601);
  });
});