System.register(['angular2/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1;
    var QuestionModel;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            QuestionModel = (function () {
                function QuestionModel() {
                    this.questions = [];
                }
                QuestionModel.prototype.toGroup = function () {
                    var group = {};
                    this.questions.forEach(function (question) {
                        group[question.key] = [''];
                        if (question.required) {
                            group[question.key].push(common_1.Validators.required);
                        }
                    });
                    return group;
                };
                return QuestionModel;
            }());
            exports_1("QuestionModel", QuestionModel);
        }
    }
});
//# sourceMappingURL=question-model.js.map