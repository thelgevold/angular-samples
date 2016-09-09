import { Component } from '@angular/core';
import { FriendsService } from './friends-service';
export var FriendsList = (function () {
    function FriendsList(_friendsServce) {
        this._friendsServce = _friendsServce;
        this.friends = [];
    }
    FriendsList.prototype.loadData = function () {
        var _this = this;
        this.subscription = this._friendsServce
            .getFriends()
            .subscribe(function (res) { return _this.friends = res; }, function (error) { return console.log(error); });
    };
    FriendsList.prototype.ngOnInit = function () {
        this.loadData();
    };
    FriendsList.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        console.log('Destroyed');
    };
    FriendsList.decorators = [
        { type: Component, args: [{
                    selector: 'friends-list',
                    template: "\n    <div *ngFor=\"let friend of friends\">\n      {{friend}}\n    </div>\n    <button (click)=\"loadData()\">Reload</button>\n  "
                },] },
    ];
    FriendsList.ctorParameters = [
        { type: FriendsService, },
    ];
    return FriendsList;
}());
