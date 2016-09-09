import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export var FriendsService = (function () {
    function FriendsService(_http) {
        this._http = _http;
        this._friends = null;
    }
    FriendsService.prototype.clearCache = function () {
        this._friends = null;
    };
    FriendsService.prototype.getFriends = function () {
        if (!this._friends) {
            this._friends = this._http.get('./components/rxjs-caching/friends.json')
                .map(function (res) { return res.json().friends; })
                .do(function (friends) { return console.log('fetched friends'); })
                .publishReplay(1)
                .refCount();
        }
        return this._friends;
    };
    FriendsService.decorators = [
        { type: Injectable },
    ];
    FriendsService.ctorParameters = [
        { type: Http, },
    ];
    return FriendsService;
}());
