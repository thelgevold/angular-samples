"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/timer");
require("rxjs/add/observable/forkJoin");
require("rxjs/add/observable/of");
require("rxjs/add/operator/take");
require("rxjs/add/operator/merge");
require("rxjs/add/operator/concat");
var RxJsStreams = (function () {
    function RxJsStreams() {
        this.concatStream = [];
        this.mergeStream = [];
        this.forkJoinStream = [];
        this.flatMappedStreams = {};
    }
    RxJsStreams.prototype.flatMapStreams = function () {
        var _this = this;
        var first = Observable_1.Observable.of(10);
        first.flatMap(function (operand1) {
            return Observable_1.Observable.of(operand1 + 10);
        })
            .subscribe(function (res) { return _this.flatMappedStreams = { msg: '10 + 10 = ' + res }; });
    };
    RxJsStreams.prototype.concatStreams = function () {
        var _this = this;
        var first = Observable_1.Observable.timer(10, 500).map(function (r) {
            return { source: 1, value: r };
        }).take(4);
        var second = Observable_1.Observable.timer(10, 500).map(function (r) {
            return { source: 2, value: r };
        }).take(4);
        first.concat(second).subscribe(function (res) { return _this.concatStream.push(res); });
    };
    RxJsStreams.prototype.mergeStreams = function () {
        var _this = this;
        var first = Observable_1.Observable.timer(10, 500).map(function (r) {
            return { source: 1, value: r };
        }).take(4);
        var second = Observable_1.Observable.timer(10, 500).map(function (r) {
            return { source: 2, value: r };
        }).take(4);
        first.merge(second).subscribe(function (res) { return _this.mergeStream.push(res); });
    };
    RxJsStreams.prototype.forkJoinStreams = function () {
        var _this = this;
        var first = Observable_1.Observable.of({ source: 1, value: 1 });
        var second = Observable_1.Observable.of({ source: 2, value: 1 });
        Observable_1.Observable.forkJoin(first, second)
            .subscribe(function (res) { return _this.forkJoinStream = res; });
    };
    return RxJsStreams;
}());
RxJsStreams = __decorate([
    core_1.Component({
        selector: 'rxjs-streams',
        template: "\n  <div class=\"stream1\">Stream1</div>\n  <div class=\"stream2\">Stream2</div>\n  <br/>\n  <button (click)=\"mergeStreams()\">Merge Streams</button>\n  <button (click)=\"concatStreams()\">Concat Streams</button>\n  <button (click)=\"forkJoinStreams()\">ForkJoin Streams</button>\n  <button (click)=\"flatMapStreams()\">FlatMap Streams</button>\n\n  <div class=\"stream-section\">\n    <h4>Concatenated Streams</h4>\n    <div *ngFor=\"let item of concatStream\">\n      <div class=\"floatLeft\" [ngClass]=\"{stream1:item.source === 1,stream2:item.source === 2}\">{{item.value}}</div>\n    </div>\n  </div>\n\n  <div class=\"stream-section\">\n    <h4>Merged Streams</h4>\n    <div *ngFor=\"let item of mergeStream\">\n      <div class=\"floatLeft\" [ngClass]=\"{stream1:item.source === 1,stream2:item.source === 2}\">{{item.value}}</div>\n    </div>\n  </div>\n\n  <div class=\"stream-section\">\n    <h4>ForkJoined Streams</h4>\n    <div *ngFor=\"let item of forkJoinStream\">\n      <div [ngClass]=\"{stream1:item.source === 1,stream2:item.source === 2}\">{{item.value}}</div>\n    </div>\n  </div>\n\n  <br/>\n  <div>\n    <h4>Flatmapped Streams</h4>\n    <div>{{flatMappedStreams.msg}}</div>\n  </div>\n"
    })
], RxJsStreams);
exports.RxJsStreams = RxJsStreams;
