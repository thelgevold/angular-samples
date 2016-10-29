var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { QuestionBase } from './question-base';
export var TextboxQuestion = (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion() {
        _super.call(this);
        this.controlType = 'textbox';
    }
    return TextboxQuestion;
}(QuestionBase));
