import { Component } from '@angular/core';
import { QuestionModel } from './question-model';
import { TextboxQuestion } from './textbox-question';
import { DropDownQuestion } from './dropdown-question';
export var SurveyDemo = (function () {
    function SurveyDemo() {
        this.questionModel = new QuestionModel();
        var question = new TextboxQuestion();
        question.key = 'lastName';
        question.text = 'Last name';
        question.required = true;
        question.order = 2;
        this.questionModel.questions.push(question);
        question = new TextboxQuestion();
        question.key = 'firstName';
        question.text = 'First name';
        question.required = true;
        question.order = 1;
        this.questionModel.questions.push(question);
        question = new TextboxQuestion();
        question.key = 'emailAddress';
        question.text = 'Email';
        question.required = false;
        question.type = 'email';
        question.order = 3;
        this.questionModel.questions.push(question);
        var ddQuestion = new DropDownQuestion();
        ddQuestion.key = 'country';
        ddQuestion.text = 'Country';
        ddQuestion.options.push({ key: 'usa', value: 'USA' });
        ddQuestion.options.push({ key: 'germany', value: 'Germany' });
        ddQuestion.options.push({ key: 'canada', value: 'Canada' });
        ddQuestion.options.push({ key: 'australia', value: 'Australia' });
        ddQuestion.order = 4;
        this.questionModel.questions.push(ddQuestion);
        this.questionModel.questions.sort(function (a, b) { return a.order - b.order; });
    }
    SurveyDemo.decorators = [
        { type: Component, args: [{
                    selector: 'survey-demo',
                    template: '<div><h1>Survey using Dynamic Form</h1><survey [model]="questionModel"></survey></div>'
                },] },
    ];
    SurveyDemo.ctorParameters = function () { return []; };
    return SurveyDemo;
}());
