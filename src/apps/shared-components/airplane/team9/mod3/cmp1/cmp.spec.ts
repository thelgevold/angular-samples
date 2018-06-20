
import { Cmp931Component } from './cmp';
describe('Cmp931Component', () => {
  it('should add', () => {
    expect(new Cmp931Component().add931(1)).toBe(932);
  });
});