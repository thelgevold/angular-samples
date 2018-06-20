
import { Cmp200Component } from './cmp';
describe('Cmp200Component', () => {
  it('should add', () => {
    expect(new Cmp200Component().add200(1)).toBe(201);
  });
});