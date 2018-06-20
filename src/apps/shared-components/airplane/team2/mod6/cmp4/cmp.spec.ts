
import { Cmp264Component } from './cmp';
describe('Cmp264Component', () => {
  it('should add', () => {
    expect(new Cmp264Component().add264(1)).toBe(265);
  });
});