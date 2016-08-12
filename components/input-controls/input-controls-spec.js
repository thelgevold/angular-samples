System.register(['@angular/core/testing', './input-controls'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, input_controls_1;
    function main() {
        describe('Two Way Bound Textbox', function () {
            beforeEach(function () {
                testing_1.TestBed.configureTestingModule({
                    declarations: [input_controls_1.InputControls]
                });
            });
            beforeEach(testing_1.async(function () {
                testing_1.TestBed.compileComponents();
            }));
            it('should update textbox from model', testing_1.async(function () {
                var fixture = testing_1.TestBed.createComponent(input_controls_1.InputControls);
                fixture.detectChanges();
                var compiled = fixture.elementRef.nativeElement;
                expect(compiled.querySelector('#name').value).toBe('Two way bound');
                fixture.componentInstance.name = 'updated';
                fixture.detectChanges();
                expect(compiled.querySelector('#name').value).toBe('updated');
            }));
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (input_controls_1_1) {
                input_controls_1 = input_controls_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=input-controls-spec.js.map