import {Component} from 'angular2/core';
import {Survey} from './survey';
import {QuestionModel} from './question-model';
import {TextboxQuestion} from './textbox-question';

@Component({
    selector:'survey-demo',
    template:'<div><h1>Survey</h1><survey [model]="questionModel"></survey></div>',
    directives:[Survey]
})

export class SurveyDemo {

    questionModel = new QuestionModel();

    constructor(){

        let question = new TextboxQuestion();
        question.key = 'lastName';
        question.text = 'Last name';
        question.required = true;
        question.type = 'text';
        question.order = 2;
        this.questionModel.questions.push(question);

        question = new TextboxQuestion();
        question.key = 'firstName';
        question.text = 'First name';
        question.required = false;
        question.type = 'text';
        question.order = 1;
        this.questionModel.questions.push(question);

        question = new TextboxQuestion();
        question.key = 'age';
        question.text = 'Age';
        question.required = false;
        question.type = 'number';
        question.order = 3;
        this.questionModel.questions.push(question);

        this.questionModel.questions.sort(q => -q.order);
    }
}