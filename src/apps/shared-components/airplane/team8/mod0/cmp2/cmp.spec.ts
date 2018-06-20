
import { Cmp802Component } from './cmp';
describe('Cmp802Component', () => {
  it('should add', () => {
    expect(new Cmp802Component().add802(1)).toBe(803);
  });
});