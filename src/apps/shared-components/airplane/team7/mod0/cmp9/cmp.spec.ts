
import { Cmp709Component } from './cmp';
describe('Cmp709Component', () => {
  it('should add', () => {
    expect(new Cmp709Component().add709(1)).toBe(710);
  });
});