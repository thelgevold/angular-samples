
import { Cmp323Component } from './cmp';
describe('Cmp323Component', () => {
  it('should add', () => {
    expect(new Cmp323Component().add323(1)).toBe(324);
  });
});