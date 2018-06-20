
import { Cmp365Component } from './cmp';
describe('Cmp365Component', () => {
  it('should add', () => {
    expect(new Cmp365Component().add365(1)).toBe(366);
  });
});