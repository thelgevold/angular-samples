var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
var HttpSample = (function () {
    function HttpSample(http) {
        this.postResponse = new Person();
        this.country = new Subject();
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
        Observable.forkJoin(this.http.get('./friends.json').map(function (res) { return res.json(); }), this.http.get('./customer.json').map(function (res) { return res.json(); })).subscribe(function (res) { return _this.combined = { friends: res[0].friends, customer: res[1] }; });
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
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://www.syntaxsuccess.com/poc-post/', { firstName: 'Joe', lastName: 'Smith' }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return _this.postResponse = res; });
    };
    return HttpSample;
}());
HttpSample = __decorate([
    Component({
        templateUrl: './http.html'
    }),
    __metadata("design:paramtypes", [Http])
], HttpSample);
export { HttpSample };
var Person = (function () {
    function Person() {
    }
    return Person;
}());
