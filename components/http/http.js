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
export let HttpSample = class HttpSample {
    constructor(http) {
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
    getCapitol() {
        this.country.switchMap((country) => this.http.get('./country-info/' + country + '.json'))
            .map((res) => res.json())
            .subscribe(res => this.capitol = res.capitol);
    }
    isActive(country) {
        return this.activeCountry === country;
    }
    loadFriendsAsPromise() {
        this.friendsAsPromise = {};
        this.http.get('./friends.json').toPromise()
            .then((res) => {
            this.friendsAsPromise.friends = res.json().friends;
        });
    }
    loadFriendsAndCustomers() {
        this.combined = { friends: [], customer: {} };
        Observable.forkJoin(this.http.get('./friends.json').map((res) => res.json()), this.http.get('./customer.json').map((res) => res.json())).subscribe(res => this.combined = { friends: res[0].friends, customer: res[1] });
    }
    loadFriendsSuccessFully() {
        this.result = { friends: [] };
        this.http.get('./friends.json').map((res) => res.json()).subscribe(res => this.result = res);
    }
    loadContractByCustomer() {
        this.http.get('./customer.json').map((res) => {
            this.customer = res.json();
            return this.customer;
        })
            .flatMap((customer) => this.http.get(customer.contractUrl)).map((res) => res.json())
            .subscribe(res => this.contract = res);
    }
    loadFriendsWithError() {
        this.result = { friends: [] };
        this.http.get('./friends2.json').map((res) => res.json()).subscribe(res => this.result = res, error => this.error = error);
    }
    postData() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://www.syntaxsuccess.com/poc-post/', { firstName: 'Joe', lastName: 'Smith' }, { headers: headers })
            .map((res) => res.json())
            .subscribe((res) => this.postResponse = res);
    }
};
HttpSample = __decorate([
    Component({
        templateUrl: './components/http/http.html'
    }), 
    __metadata('design:paramtypes', [Http])
], HttpSample);
class Person {
}
