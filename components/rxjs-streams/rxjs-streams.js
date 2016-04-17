System.register(['angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var RxJsStreams;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            RxJsStreams = (function () {
                function RxJsStreams() {
                    this.concatStream = [];
                    this.mergeStream = [];
                }
                RxJsStreams.prototype.concatStreams = function () {
                    var _this = this;
                    var first = Observable_1.Observable.timer(10, 500).map(function (r) {
                        return { source: 1, value: r };
                    }).take(5);
                    var second = Observable_1.Observable.timer(10, 500).map(function (r) {
                        return { source: 2, value: r };
                    }).take(5);
                    first.concat(second).subscribe(function (res) { return _this.concatStream.push(res); });
                };
                RxJsStreams.prototype.mergeStreams = function () {
                    var _this = this;
                    var first = Observable_1.Observable.timer(10, 500).map(function (r) {
                        return { source: 1, value: r };
                    }).take(5);
                    var second = Observable_1.Observable.timer(10, 500).map(function (r) {
                        return { source: 2, value: r };
                    }).take(5);
                    first.merge(second).subscribe(function (res) { return _this.mergeStream.push(res); });
                };
                RxJsStreams = __decorate([
                    core_1.Component({
                        selector: 'rxjs-streams',
                        templateUrl: './components/rxjs-streams/rxjs-streams.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RxJsStreams);
                return RxJsStreams;
            }());
            exports_1("RxJsStreams", RxJsStreams);
        }
    }
});
//# sourceMappingURL=rxjs-streams.js.map