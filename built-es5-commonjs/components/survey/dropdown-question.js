"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var question_base_1 = require("./question-base");
var DropDownQuestion = (function (_super) {
    __extends(DropDownQuestion, _super);
    function DropDownQuestion() {
        var _this = _super.call(this) || this;
        _this.options = [];
        _this.controlType = 'dropdown';
        return _this;
    }
    return DropDownQuestion;
}(question_base_1.QuestionBase));
exports.DropDownQuestion = DropDownQuestion;
