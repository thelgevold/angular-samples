"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var RxJsBuffering = (function () {
    function RxJsBuffering() {
        this.numbers = [1, 2, 3, 4, 5];
        this.sum = new Subject_1.Subject();
        this.calculation = {};
        this.showSum = false;
    }
    RxJsBuffering.prototype.add = function (number) {
        this.sum.next(number);
    };
    RxJsBuffering.prototype.ngOnInit = function () {
        var _this = this;
        this.series = this.sum
            .asObservable()
            .do(function (a) { return _this.showSum = false; })
            .bufferCount(3)
            .subscribe(function (res) {
            _this.calculation = { sum: res.reduce(function (a, b) { return a + b; }) };
            _this.showSum = true;
        });
    };
    return RxJsBuffering;
}());
RxJsBuffering = __decorate([
    core_1.Component({
        template: "\n    <h3>Click three numbers to add</h3>\n    <div (click)=\"add(number)\" class=\"box\" *ngFor=\"let number of numbers\">{{number}}</div>\n    <div class=\"sum\" *ngIf=\"showSum\">SUM: {{calculation.sum}}</div>\n  "
    })
], RxJsBuffering);
exports.RxJsBuffering = RxJsBuffering;
