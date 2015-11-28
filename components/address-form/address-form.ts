function zipValidator(zip) {

    var valid = /^\d{5}$/.test(zip.value);

    if(valid){
        return null;
    }

    return {"invalidZip":true};
}

import {Component, FORM_DIRECTIVES, FormBuilder, CORE_DIRECTIVES,
        Validators, ControlGroup, Host}
from 'angular2/angular2';

@Component({
    selector: 'address-form',
    directives:[FORM_DIRECTIVES],
    templateUrl: './components/address-form/address-form.html',
    providers: [FormBuilder,CORE_DIRECTIVES]
})

export class AddressForm {

    form;

    constructor(fb: FormBuilder) {

        this.form = fb.group({
            "firstName": ['', Validators.required],
            "streetAddress": ['',Validators.required],
            "zip": ['', Validators.compose([zipValidator])],
            "type": ['home']
        });
    }

    onSubmit() {
        console.dir(this.form.value);
    }
}