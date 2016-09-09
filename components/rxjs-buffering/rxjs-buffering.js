import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export var RxJsBuffering = (function () {
    function RxJsBuffering() {
        this.numbers = [1, 2, 3, 4, 5];
        this.sum = new Subject();
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
    RxJsBuffering.decorators = [
        { type: Component, args: [{
                    template: "\n    <h3>Click three numbers to add</h3>\n    <div (click)=\"add(number)\" class=\"box\" *ngFor=\"let number of numbers\">{{number}}</div>\n    <div class=\"sum\" *ngIf=\"showSum\">SUM: {{calculation.sum}}</div>\n  "
                },] },
    ];
    RxJsBuffering.ctorParameters = [];
    return RxJsBuffering;
}());
