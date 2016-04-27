System.register(['angular2/testing', './input-controls'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_2, input_controls_1;
    function main() {
        testing_1.describe('Two Way Bound Textbox', function () {
            testing_1.it('should update textbox from model', testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
                return tcb.createAsync(input_controls_1.InputControls)
                    .then(function (fixture) {
                    fixture.detectChanges();
                    var compiled = fixture.elementRef.nativeElement;
                    testing_1.expect(compiled.querySelector('#name').value).toBe('Two way bound');
                    fixture.componentInstance.name = 'updated';
                    fixture.detectChanges();
                    testing_1.expect(compiled.querySelector('#name').value).toBe('updated');
                });
            }));
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
                testing_2 = testing_1_1;
            },
            function (input_controls_1_1) {
                input_controls_1 = input_controls_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=input-controls-spec.js.map