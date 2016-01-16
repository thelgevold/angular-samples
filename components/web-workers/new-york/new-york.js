var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var clock_ts_1 = require('../clock.ts');
var worker_1 = require('angular2/web_worker/worker');
var core_1 = require("angular2/core");
var worker_app_1 = require("angular2/platform/worker_app");
var NewYork = (function (_super) {
    __extends(NewYork, _super);
    function NewYork() {
        _super.call(this, -5);
        this.city = 'New York';
    }
    NewYork = __decorate([
        worker_1.Component({
            selector: 'new-york',
            templateUrl: './clock.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NewYork);
    return NewYork;
})(clock_ts_1.Clock);
exports.NewYork = NewYork;
core_1.platform([worker_app_1.WORKER_APP_PLATFORM]).application([worker_app_1.WORKER_APP_APPLICATION]).bootstrap(NewYork);
