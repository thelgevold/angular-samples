var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { QuestionBase } from './question-base';
var DropDownQuestion = (function (_super) {
    __extends(DropDownQuestion, _super);
    function DropDownQuestion() {
        var _this = _super.call(this) || this;
        _this.options = [];
        _this.controlType = 'dropdown';
        return _this;
    }
    return DropDownQuestion;
}(QuestionBase));
export { DropDownQuestion };
