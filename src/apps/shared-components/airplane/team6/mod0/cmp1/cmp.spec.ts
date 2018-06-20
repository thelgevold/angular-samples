
import { Cmp601Component } from './cmp';
describe('Cmp601Component', () => {
  it('should add', () => {
    expect(new Cmp601Component().add601(1)).toBe(602);
  });
});