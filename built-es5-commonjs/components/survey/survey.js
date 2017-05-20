"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Survey = (function () {
    function Survey() {
        this.payLoad = null;
    }
    Survey.prototype.ngOnInit = function () {
        this.form = this.model.toGroup();
    };
    Survey.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    return Survey;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Survey.prototype, "model", void 0);
Survey = __decorate([
    core_1.Component({
        selector: 'survey',
        template: "\n    <div>\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n        <div *ngFor=\"let question of model.questions\" class=\"form-row\">\n            <div class=\"formHeading\">{{question.text}}</div>\n\n            <div [ngSwitch]=\"question.controlType\">\n                <div *ngSwitchCase=\"'textbox'\"><input type=\"{{question.type}}\" id=\"{{question.key}}\" [formControlName]=\"question.key\"></div>\n                <div *ngSwitchCase=\"'dropdown'\">\n                    <select [formControlName]=\"question.key\">\n                        <option *ngFor=\"let o of question.options\" [value]=\"o.key\">{{o.value}}</option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"errorMessage\" *ngIf=\"!form.controls[question.key].valid\">*required</div>\n        </div>\n\n        <div class=\"form-row\">\n            <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n        </div>\n    </form>\n\n    <div class=\"form-row\">\n        <div *ngIf=\"payLoad\"><strong>The form contains the following values</strong></div>\n        <div>\n            {{payLoad}}\n        </div>\n    </div>\n    <h4><a href=\"http://www.syntaxsuccess.com/viewarticle/dynamic-form-in-angular-2.0\">Read more here</a></h4>\n    </div>"
    })
], Survey);
exports.Survey = Survey;
