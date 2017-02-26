var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';
var RxJsStreams = (function () {
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
    return RxJsStreams;
}());
RxJsStreams = __decorate([
    Component({
        selector: 'rxjs-streams',
        templateUrl: './rxjs-streams.html'
    })
], RxJsStreams);
export { RxJsStreams };
