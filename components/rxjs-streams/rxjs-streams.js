import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
export var RxJsStreams = (function () {
    function RxJsStreams() {
        this.concatStream = [];
        this.mergeStream = [];
        this.forkJoinStream = [];
        this.flatMappedStreams = {};
    }
    RxJsStreams.prototype.flatMapStreams = function () {
        var _this = this;
        var first = Observable.of(10);
        first.flatMap(function (operand1) {
            return Observable.of(operand1 + 10);
        })
            .subscribe(function (res) { return _this.flatMappedStreams = { msg: '10 + 10 = ' + res }; });
    };
    RxJsStreams.prototype.concatStreams = function () {
        var _this = this;
        var first = Observable.timer(10, 500).map(function (r) {
            return { source: 1, value: r };
        }).take(4);
        var second = Observable.timer(10, 500).map(function (r) {
            return { source: 2, value: r };
        }).take(4);
        first.concat(second).subscribe(function (res) { return _this.concatStream.push(res); });
    };
    RxJsStreams.prototype.mergeStreams = function () {
        var _this = this;
        var first = Observable.timer(10, 500).map(function (r) {
            return { source: 1, value: r };
        }).take(4);
        var second = Observable.timer(10, 500).map(function (r) {
            return { source: 2, value: r };
        }).take(4);
        first.merge(second).subscribe(function (res) { return _this.mergeStream.push(res); });
    };
    RxJsStreams.prototype.forkJoinStreams = function () {
        var _this = this;
        var first = Observable.of({ source: 1, value: 1 });
        var second = Observable.of({ source: 2, value: 1 });
        Observable.forkJoin(first, second)
            .subscribe(function (res) { return _this.forkJoinStream = res; });
    };
    RxJsStreams.decorators = [
        { type: Component, args: [{
                    selector: 'rxjs-streams',
                    templateUrl: './rxjs-streams.html'
                },] },
    ];
    RxJsStreams.ctorParameters = [];
    return RxJsStreams;
}());
