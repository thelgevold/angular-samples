System.register(['@angular/core', '@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1;
    var AddressForm;
    function zipValidator(zip) {
        var valid = /^\d{5}$/.test(zip.value);
        if (valid) {
            return null;
        }
        return { "invalidZip": true };
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            AddressForm = (function () {
                function AddressForm() {
                    this.payLoad = null;
                    var group = {};
                    group.firstName = new forms_1.FormControl('', forms_1.Validators.required);
                    group.streetAddress = new forms_1.FormControl('', forms_1.Validators.required);
                    group.zip = new forms_1.FormControl('', zipValidator);
                    group.type = new forms_1.FormControl('home');
                    this.form = new forms_1.FormGroup(group);
                }
                AddressForm.prototype.onSubmit = function () {
                    this.payLoad = JSON.stringify(this.form.value);
                };
                AddressForm = __decorate([
                    core_1.Component({
                        selector: 'address-form',
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
                        templateUrl: './components/address-form/address-form.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddressForm);
                return AddressForm;
            }());
            exports_1("AddressForm", AddressForm);
        }
    }
});
//# sourceMappingURL=address-form.js.map