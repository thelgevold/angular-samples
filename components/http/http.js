var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var HttpSample = (function () {
    function HttpSample(http) {
        this.postResponse = new Person();
        this.http = http;
        this.loadFriendsSuccessFully();
        this.loadFriendsWithError();
        this.loadContractByCustomer();
    }
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
        angular2_1.Component({
            templateUrl: './components/http/http.html',
            directives: [angular2_1.CORE_DIRECTIVES]
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
