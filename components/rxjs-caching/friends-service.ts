import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FriendsService{
  
  _friends = null;

  constructor(private _http:Http){
  }
  
  clearCache(){
    this._friends = null;
  }
  
  getFriends(){
    if(!this._friends){
      this._friends = this._http.get('./components/rxjs-caching/friends.json')
                          .map((res:Response) => res.json().friends)
                          .do(friends => console.log('fetched friends'))
                          .publishReplay(1)
                          .refCount();
    }
    return this._friends;
  }
}