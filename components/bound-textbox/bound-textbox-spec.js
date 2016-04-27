System.register(['angular2/testing', './bound-textbox'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, testing_2, bound_textbox_1;
    function main() {
        testing_1.describe('Bound Textbox', function () {
            testing_1.it('should update text', testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
                return tcb.createAsync(bound_textbox_1.BoundTextbox)
                    .then(function (fixture) {
                    fixture.detectChanges();
                    var compiled = fixture.elementRef.nativeElement;
                    testing_1.expect(compiled.querySelector('span')).toHaveText('hello');
                    fixture.componentInstance.typing({ target: { value: 'new val' } });
                    fixture.detectChanges();
                    testing_1.expect(compiled.querySelector('span')).toHaveText('new val');
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
            function (bound_textbox_1_1) {
                bound_textbox_1 = bound_textbox_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=bound-textbox-spec.js.map