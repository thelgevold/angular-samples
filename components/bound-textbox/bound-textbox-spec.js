import { TestBed, async } from '@angular/core/testing';
import { BoundTextbox } from './bound-textbox';
export function main() {
    describe('Bound Textbox', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [BoundTextbox]
            });
        });
        beforeEach(async(() => {
            TestBed.compileComponents();
        }));
        it('should update text', async(() => {
            var fixture = TestBed.createComponent(BoundTextbox);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('span').innerText).toContain('hello');
            fixture.componentInstance.typing({ target: { value: 'new val' } });
            fixture.detectChanges();
            expect(compiled.querySelector('span').innerText).toContain('new val');
        }));
    });
}
