
import { Cmp823Component } from './cmp';
describe('Cmp823Component', () => {
  it('should add', () => {
    expect(new Cmp823Component().add823(1)).toBe(824);
  });
});