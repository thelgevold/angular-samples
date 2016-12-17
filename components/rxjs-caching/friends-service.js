import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/publishReplay';
export class FriendsService {
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
}
FriendsService.decorators = [
    { type: Injectable },
];
FriendsService.ctorParameters = () => [
    { type: Http, },
];
