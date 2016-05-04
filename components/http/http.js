System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, Subject_1;
    var HttpSample, Person;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            HttpSample = (function () {
                function HttpSample(http) {
                    this.postResponse = new Person();
                    this.country = new Subject_1.Subject();
                    this.http = http;
                    this.loadFriendsSuccessFully();
                    this.loadFriendsWithError();
                    this.loadContractByCustomer();
                    this.loadFriendsAndCustomers();
                    this.loadFriendsAsPromise();
                    this.getCapitol();
                }
                HttpSample.prototype.getCapitol = function () {
                    var _this = this;
                    this.country.switchMap(function (country) { return _this.http.get('./country-info/' + country + '.json'); })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return _this.capitol = res.capitol; });
                };
                HttpSample.prototype.isActive = function (country) {
                    return this.activeCountry === country;
                };
                HttpSample.prototype.loadFriendsAsPromise = function () {
                    var _this = this;
                    this.friendsAsPromise = {};
                    this.http.get('./friends.json').toPromise()
                        .then(function (res) {
                        _this.friendsAsPromise.friends = res.json().friends;
                    });
                };
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
            }());
            exports_1("HttpSample", HttpSample);
            Person = (function () {
                function Person() {
                }
                return Person;
            }());
        }
    }
});
//# sourceMappingURL=http.js.map