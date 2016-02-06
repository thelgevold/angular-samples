System.register(['./question-base'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var question_base_1;
    var DropDownQuestion;
    return {
        setters:[
            function (question_base_1_1) {
                question_base_1 = question_base_1_1;
            }],
        execute: function() {
            DropDownQuestion = (function (_super) {
                __extends(DropDownQuestion, _super);
                function DropDownQuestion() {
                    _super.call(this);
                    this.options = [];
                    this.controlType = 'dropdown';
                }
                DropDownQuestion.prototype.addOption = function (value) {
                    this.options.push(value);
                };
                return DropDownQuestion;
            })(question_base_1.QuestionBase);
            exports_1("DropDownQuestion", DropDownQuestion);
        }
    }
});
