import {Component} from '@angular/core';
import {FriendsService} from './friends-service';

@Component({
  providers:[FriendsService],
  templateUrl:'./components/rxjs-caching/caching-demo.html'
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