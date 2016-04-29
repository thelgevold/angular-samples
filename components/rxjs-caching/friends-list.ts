import {Component, OnInit, OnDestroy} from 'angular2/core';
import {FriendsService} from './friends-service';

@Component({
  selector:'friends-list',
  template:`
    <div *ngFor="let friend of friends">
      {{friend}}
    </div>
    <button (click)="loadData()">Reload</button>
  `
})

export class FriendsList implements OnInit{

  friends = [];
  subscription;

  constructor(private _friendsServce:FriendsService){
  }

  loadData(){
    this.subscription = this._friendsServce
                            .getFriends()
                            .subscribe(res => this.friends = res, 
                                       error => console.log(error));
  }

  ngOnInit(){
    this.loadData();
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log('Destroyed');
  }
}