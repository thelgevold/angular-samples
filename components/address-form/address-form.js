var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
export let AddressForm = class AddressForm {
    constructor() {
        this.payLoad = null;
        let group = {};
        group.firstName = new FormControl('', Validators.required);
        group.streetAddress = new FormControl('', Validators.required);
        group.zip = new FormControl('', zipValidator);
        group.type = new FormControl('home');
        this.form = new FormGroup(group);
    }
    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
};
AddressForm = __decorate([
    Component({
        selector: 'address-form',
        templateUrl: './components/address-form/address-form.html'
    }), 
    __metadata('design:paramtypes', [])
], AddressForm);
