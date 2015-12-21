var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var HttpSample = (function () {
    function HttpSample(http) {
        this.postResponse = new Person();
        this.http = http;
        this.loadFriendsSuccessFully();
        this.loadFriendsWithError();
        this.loadContractByCustomer();
        this.loadFriendsAndCustomers();
    }
    HttpSample.prototype.loadFriendsAndCustomers = function () {
        var _this = this;
        this.combined = { friends: [], customer: {} };
        Observable_1.Observable.forkJoin(this.http.get('./friends.json').map(function (res) { return res.json(); }), this.http.get('./customer.json').map(function (res) { return res.json(); })).subscribe(function (res) { return _this.combined = { friends: res[0].friends, customer: res[1] }; });
    };
    HttpSample.prototype.loadFriendsSuccessFully = function () {
        var _this = this;
        this.result = { friends: [] };
        this.http.get('./friends.json').map(function (res) { return res.json(); }).subscribe(function (res) { return _this.result = res; });
    };
    HttpSample.prototype.loadContractByCustomer = function () {
        var _this = this;
        this.contract = {};
        this.customer = {};
        this.http.get('./customer.json').map(function (res) {
            _this.customer = res.json();
            return _this.customer;
        })
            .flatMap(function (customer) { return _this.http.get(customer.contractUrl); }).map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.contract = res; });
    };
    HttpSample.prototype.loadFriendsWithError = function () {
        var _this = this;
        this.result = { friends: [] };
        this.http.get('./friends2.json').map(function (res) { return res.json(); }).subscribe(function (res) { return _this.result = res; }, function (error) { return _this.error = error; });
    };
    HttpSample.prototype.postData = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://www.syntaxsuccess.com/poc-post/', JSON.stringify({ firstName: 'Joe', lastName: 'Smith' }), { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.postResponse = res; });
    };
    HttpSample = __decorate([
        core_1.Component({
            templateUrl: './components/http/http.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpSample);
    return HttpSample;
})();
exports.HttpSample = HttpSample;
var Person = (function () {
    function Person() {
    }
    return Person;
})();
