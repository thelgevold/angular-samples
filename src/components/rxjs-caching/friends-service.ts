import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class FriendsService{
  
  _friends:Observable<any> = null;

  constructor(private _http:Http){
  }
  
  clearCache(){
    this._friends = null;
  }
  
  getFriends(){
    if(!this._friends){
      this._friends = this._http.get('/api/friends.json')
                          .map((res:Response) => res.json().friends)
                          .do(friends => console.log('fetched friends'))
                          .publishReplay(1)
                          .refCount();
    }
    return this._friends;
  }
}