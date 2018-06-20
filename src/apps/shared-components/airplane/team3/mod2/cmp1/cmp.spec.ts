
import { Cmp321Component } from './cmp';
describe('Cmp321Component', () => {
  it('should add', () => {
    expect(new Cmp321Component().add321(1)).toBe(322);
  });
});