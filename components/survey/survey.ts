import {Component,Input, OnInit} from 'angular2/core';
import {QuestionModel} from './question-model';
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector:'survey',
    templateUrl:'./components/survey/survey.html',
    providers: [FormBuilder]
})

export class Survey implements OnInit{

    @Input() model : any;
    form : ControlGroup;
    fb: FormBuilder;
    payLoad = null;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    ngOnInit(){
        this.form = this.fb.group(this.model.toGroup());
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}