import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
export var HttpSample = (function () {
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
    HttpSample.decorators = [
        { type: Component, args: [{
                    templateUrl: './http.html'
                },] },
    ];
    HttpSample.ctorParameters = [
        { type: Http, },
    ];
    return HttpSample;
}());
var Person = (function () {
    function Person() {
    }
    return Person;
}());
