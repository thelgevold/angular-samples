import {Component} from 'angular2/core';
import {Survey} from './survey';
import {QuestionModel} from './question-model';
import {QuestionBase} from './question-base';

@Component({
    selector:'survey-demo',
    template:'<div><h1>Survey</h1><survey [model]="questionModel"></survey></div>',
    directives:[Survey]
})

export class SurveyDemo {

    questionModel = new QuestionModel();

    constructor(){

        let question = new QuestionBase<string>();

        question.key = 'firstName';
        question.text = 'First name';
        question.required = false;

        this.questionModel.questions.push(question);

        question = new QuestionBase<string>();

        question.key = 'lastName';
        question.text = 'Last name';
        question.required = true;

        this.questionModel.questions.push(question);
    }
}