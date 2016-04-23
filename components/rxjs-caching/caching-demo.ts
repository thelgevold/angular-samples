import {Component} from 'angular2/core';
import {FriendsList} from './friends-list';
import {FriendsService} from './friends-service';

@Component({
  providers:[FriendsService],
  templateUrl:'./components/rxjs-caching/caching-demo.html',
  directives:[FriendsList]
})
export class CachingDemo{
  
  display = {first:true, second:true};
  
  constructor(private _friendsService:FriendsService){
  }
  
  remove(list){
    this.display[list] = false;
  }
  
  reset(){
    this.display = {first:true, second:true};
  }
  
  clearCache(){
    this._friendsService.clearCache();
  } 
}