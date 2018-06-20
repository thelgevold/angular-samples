
import { Cmp880Component } from './cmp';
describe('Cmp880Component', () => {
  it('should add', () => {
    expect(new Cmp880Component().add880(1)).toBe(881);
  });
});