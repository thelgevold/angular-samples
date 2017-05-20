"use strict";
var forms_1 = require("@angular/forms");
var QuestionModel = (function () {
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
exports.QuestionModel = QuestionModel;
