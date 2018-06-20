
import { Cmp164Component } from './cmp';
describe('Cmp164Component', () => {
  it('should add', () => {
    expect(new Cmp164Component().add164(1)).toBe(165);
  });
});