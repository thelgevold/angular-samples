import { Component } from '@angular/core';
import { FriendsService } from './friends-service';
export var CachingDemo = (function () {
    function CachingDemo(_friendsService) {
        this._friendsService = _friendsService;
        this.display = { first: true, second: true };
    }
    CachingDemo.prototype.remove = function (list) {
        this.display[list] = false;
    };
    CachingDemo.prototype.reset = function () {
        this.display = { first: true, second: true };
    };
    CachingDemo.prototype.clearCache = function () {
        this._friendsService.clearCache();
    };
    CachingDemo.decorators = [
        { type: Component, args: [{
                    providers: [FriendsService],
                    templateUrl: './caching-demo.html'
                },] },
    ];
    CachingDemo.ctorParameters = [
        { type: FriendsService, },
    ];
    return CachingDemo;
}());
