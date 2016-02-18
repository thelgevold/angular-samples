import {describe,expect,it,xit, inject, beforeEachProviders} from 'angular2/testing';
import {TestComponentBuilder, ComponentFixture, injectAsync} from 'angular2/testing';
import {InputControls} from './input-controls';

export function main() {
    describe('Two Way Bound Textbox', () => {

        it('should update textbox from model', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
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