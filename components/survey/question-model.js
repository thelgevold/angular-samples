System.register(['@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var forms_1;
    var QuestionModel;
    return {
        setters:[
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            QuestionModel = (function () {
                function QuestionModel() {
                    this.questions = [];
                }
                QuestionModel.prototype.toGroup = function () {
                    var group = {};
                    this.questions.forEach(function (question) {
                        if (question.required) {
                            group[question.key] = new forms_1.FormControl('', forms_1.Validators.required);
                        }
                        else {
                            group[question.key] = new forms_1.FormControl('');
                        }
                    });
                    return new forms_1.FormGroup(group);
                };
                return QuestionModel;
            }());
            exports_1("QuestionModel", QuestionModel);
        }
    }
});
//# sourceMappingURL=question-model.js.map