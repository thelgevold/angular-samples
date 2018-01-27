import {Component,Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionModel} from './question-model';
import {TextboxQuestion} from './textbox-question';

@Component({
    selector:'survey',
    template:`
    <div>
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <div *ngFor="let question of model.questions" class="form-row">
            <div class="formHeading">{{question.text}}</div>

            <div [ngSwitch]="question.controlType">
                <div *ngSwitchCase="'textbox'"><input type="{{question.type}}" id="{{question.key}}" [formControlName]="question.key"></div>
                <div *ngSwitchCase="'dropdown'">
                    <select [formControlName]="question.key">
                        <option *ngFor="let o of question.options" [value]="o.key">{{o.value}}</option>
                    </select>
                </div>
            </div>

            <div class="errorMessage" *ngIf="!form.controls[question.key].valid">*required</div>
        </div>

        <div class="form-row">
            <button type="submit" [disabled]="!form.valid">Save</button>
        </div>
    </form>

    <div class="form-row">
        <div *ngIf="payLoad"><strong>The form contains the following values</strong></div>
        <div>
            {{payLoad}}
        </div>
    </div>
    <h4><a href="http://www.syntaxsuccess.com/viewarticle/dynamic-form-in-angular-2.0">Read more here</a></h4>
    </div>`
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