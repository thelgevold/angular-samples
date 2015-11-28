var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function zipValidator(zip) {
    var valid = /^\d{5}$/.test(zip.value);
    if (valid) {
        return null;
    }
    return { "invalidZip": true };
}
var angular2_1 = require('angular2/angular2');
var AddressForm = (function () {
    function AddressForm(formDir, fb) {
        this.formDir = formDir;
        this.form = fb.group({
            "firstName": ['', angular2_1.Validators.required],
            "zip": ['', angular2_1.Validators.compose([zipValidator])],
        });
    }
    AddressForm.prototype.test = function () {
        var a = this.form;
    };
    AddressForm = __decorate([
        angular2_1.Component({
            selector: 'address-form',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFormModel],
            templateUrl: './components/address-form/address-form.html',
            providers: [angular2_1.FormBuilder, angular2_1.NgFormModel, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [angular2_1.NgFormModel, angular2_1.FormBuilder])
    ], AddressForm);
    return AddressForm;
})();
exports.AddressForm = AddressForm;
