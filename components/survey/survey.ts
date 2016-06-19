import {Component,Input, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

import {QuestionModel} from './question-model';
import {TextboxQuestion} from './textbox-question';

@Component({
    selector:'survey',
    templateUrl:'./components/survey/survey.html',
    directives:[REACTIVE_FORM_DIRECTIVES]
})

export class Survey implements OnInit{

    @Input() model : any;
    form : FormGroup;
    payLoad = null;

    ngOnInit(){
        this.form = this.model.toGroup();
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}