
import { Cmp298Component } from './cmp';
describe('Cmp298Component', () => {
  it('should add', () => {
    expect(new Cmp298Component().add298(1)).toBe(299);
  });
});