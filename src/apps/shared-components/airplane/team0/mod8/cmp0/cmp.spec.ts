
import { Cmp80Component } from './cmp';
describe('Cmp80Component', () => {
  it('should add', () => {
    expect(new Cmp80Component().add80(1)).toBe(81);
  });
});