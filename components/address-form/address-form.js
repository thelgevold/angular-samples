System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
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
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AddressForm = (function () {
                function AddressForm(fb) {
                    this.payLoad = null;
                    this.form = fb.group({
                        "firstName": ['', common_1.Validators.required],
                        "streetAddress": ['', common_1.Validators.required],
                        "zip": ['', common_1.Validators.compose([zipValidator])],
                        "type": ['home']
                    });
                }
                AddressForm.prototype.onSubmit = function () {
                    this.payLoad = JSON.stringify(this.form.value);
                };
                AddressForm = __decorate([
                    core_1.Component({
                        selector: 'address-form',
                        directives: [common_1.FORM_DIRECTIVES],
                        templateUrl: './components/address-form/address-form.html',
                        providers: [common_1.FormBuilder]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AddressForm);
                return AddressForm;
            })();
            exports_1("AddressForm", AddressForm);
        }
    }
});
