import { Component } from '@angular/core';
import { FriendsService } from './friends-service';
export class CachingDemo {
    constructor(_friendsService) {
        this._friendsService = _friendsService;
        this.display = { first: true, second: true };
    }
    remove(list) {
        this.display[list] = false;
    }
    reset() {
        this.display = { first: true, second: true };
    }
    clearCache() {
        this._friendsService.clearCache();
    }
}
CachingDemo.decorators = [
    { type: Component, args: [{
                providers: [FriendsService],
                templateUrl: './caching-demo.html'
            },] },
];
CachingDemo.ctorParameters = [
    { type: FriendsService, },
];
