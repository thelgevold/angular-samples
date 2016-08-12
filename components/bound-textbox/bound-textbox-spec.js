System.register(['@angular/core/testing', './bound-textbox'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, bound_textbox_1;
    function main() {
        describe('Bound Textbox', function () {
            beforeEach(function () {
                testing_1.TestBed.configureTestingModule({
                    declarations: [bound_textbox_1.BoundTextbox]
                });
            });
            beforeEach(testing_1.async(function () {
                testing_1.TestBed.compileComponents();
            }));
            it('should update text', testing_1.async(function () {
                var fixture = testing_1.TestBed.createComponent(bound_textbox_1.BoundTextbox);
                fixture.detectChanges();
                var compiled = fixture.debugElement.nativeElement;
                expect(compiled.querySelector('span').innerText).toContain('hello');
                fixture.componentInstance.typing({ target: { value: 'new val' } });
                fixture.detectChanges();
                expect(compiled.querySelector('span').innerText).toContain('new val');
            }));
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (bound_textbox_1_1) {
                bound_textbox_1 = bound_textbox_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=bound-textbox-spec.js.map