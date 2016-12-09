var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/publishReplay';
export let FriendsService = class FriendsService {
    constructor(_http) {
        this._http = _http;
        this._friends = null;
    }
    clearCache() {
        this._friends = null;
    }
    getFriends() {
        if (!this._friends) {
            this._friends = this._http.get('./components/rxjs-caching/friends.json')
                .map((res) => res.json().friends)
                .do(friends => console.log('fetched friends'))
                .publishReplay(1)
                .refCount();
        }
        return this._friends;
    }
};
FriendsService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Http])
], FriendsService);
