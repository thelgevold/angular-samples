function zipValidator(zip) {

    var valid = /^\d{5}$/.test(zip.value);

    if(valid){
        return null;
    }

    return {"invalidZip":true};
}

import {Component} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
    selector: 'address-form',
    templateUrl: './address-form.html'
})

export class AddressForm {

    form;
    payLoad = null;

    constructor() {
        let group:any = {};
        group.firstName =  new FormControl('', Validators.required);
        group.streetAddress = new FormControl('', Validators.required);
        group.zip = new FormControl('', zipValidator);
        group.type = new FormControl('home');

        this.form = new FormGroup(group);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}