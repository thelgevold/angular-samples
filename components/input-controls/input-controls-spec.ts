import {describe,expect,it,xit, inject, beforeEachProviders} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import {InputControls} from './input-controls';

export function main() {
    describe('Two Way Bound Textbox', () => {

        it('should update textbox from model', inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
            return tcb.createAsync(InputControls)
                .then((fixture) => {
                    fixture.detectChanges();
                    let compiled = fixture.elementRef.nativeElement;

                    expect(compiled.querySelector('#name').value).toBe('Two way bound');

                    fixture.componentInstance.name = 'updated';

                    fixture.detectChanges();

                    expect(compiled.querySelector('#name').value).toBe('updated');
                });
        }));
    });
}