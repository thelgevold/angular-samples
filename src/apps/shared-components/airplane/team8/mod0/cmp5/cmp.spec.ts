
import { Cmp805Component } from './cmp';
describe('Cmp805Component', () => {
  it('should add', () => {
    expect(new Cmp805Component().add805(1)).toBe(806);
  });
});