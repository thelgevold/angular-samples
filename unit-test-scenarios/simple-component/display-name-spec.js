System.register(['@angular/core/testing', './display-name'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, display_name_1;
    function main() {
        describe('DisplayName', function () {
            beforeEach(function () {
                testing_1.TestBed.configureTestingModule({
                    providers: [display_name_1.DisplayName]
                });
            });
            //Manually instantiate DisplayName
            it('should define full name', function () {
                var displayName = new display_name_1.DisplayName();
                displayName.firstName = 'Joe';
                displayName.lastName = 'Smith';
                displayName.generateFullName();
                expect(displayName.fullName).toBe('Joe Smith');
            });
            //Use DI to instantiate DisplayName
            it('should define full name2', testing_1.inject([display_name_1.DisplayName], function (displayName) {
                displayName.firstName = 'Joe';
                displayName.lastName = 'Smith';
                displayName.generateFullName();
                expect(displayName.fullName).toBe('Joe Smith');
            }));
        });
    }
    exports_1("main", main);
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (display_name_1_1) {
                display_name_1 = display_name_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=display-name-spec.js.map