import { Component } from '@angular/core';
import { FriendsService } from './friends-service';
export class FriendsList {
    constructor(_friendsServce) {
        this._friendsServce = _friendsServce;
        this.friends = [];
    }
    loadData() {
        this.subscription = this._friendsServce
            .getFriends()
            .subscribe(res => this.friends = res, error => console.log(error));
    }
    ngOnInit() {
        this.loadData();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        console.log('Destroyed');
    }
}
FriendsList.decorators = [
    { type: Component, args: [{
                selector: 'friends-list',
                template: `
    <div *ngFor="let friend of friends">
      {{friend}}
    </div>
    <button (click)="loadData()">Reload</button>
  `
            },] },
];
FriendsList.ctorParameters = [
    { type: FriendsService, },
];
