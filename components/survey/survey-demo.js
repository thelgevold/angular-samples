System.register(['angular2/core', './survey', './question-model', './question-base'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, survey_1, question_model_1, question_base_1;
    var SurveyDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (survey_1_1) {
                survey_1 = survey_1_1;
            },
            function (question_model_1_1) {
                question_model_1 = question_model_1_1;
            },
            function (question_base_1_1) {
                question_base_1 = question_base_1_1;
            }],
        execute: function() {
            SurveyDemo = (function () {
                function SurveyDemo() {
                    this.questionModel = new question_model_1.QuestionModel();
                    var question = new question_base_1.QuestionBase();
                    question.key = 'firstName';
                    question.text = 'First name';
                    question.required = false;
                    this.questionModel.questions.push(question);
                    question = new question_base_1.QuestionBase();
                    question.key = 'lastName';
                    question.text = 'Last name';
                    question.required = true;
                    this.questionModel.questions.push(question);
                }
                SurveyDemo = __decorate([
                    core_1.Component({
                        selector: 'survey-demo',
                        template: '<div><h1>Survey</h1><survey [model]="questionModel"></survey></div>',
                        directives: [survey_1.Survey]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SurveyDemo);
                return SurveyDemo;
            })();
            exports_1("SurveyDemo", SurveyDemo);
        }
    }
});
