import { TestBed, async } from '@angular/core/testing';
import { InputControls } from './input-controls';
export function main() {
    describe('Two Way Bound Textbox', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [InputControls]
            });
        });
        beforeEach(async(() => {
            TestBed.compileComponents();
        }));
        it('should update textbox from model', async(() => {
            var fixture = TestBed.createComponent(InputControls);
            fixture.detectChanges();
            let compiled = fixture.elementRef.nativeElement;
            expect(compiled.querySelector('#name').value).toBe('Two way bound');
            fixture.componentInstance.name = 'updated';
            fixture.detectChanges();
            expect(compiled.querySelector('#name').value).toBe('updated');
        }));
    });
}
