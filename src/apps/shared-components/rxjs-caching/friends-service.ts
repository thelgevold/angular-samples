import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {publishReplay, map, tap, refCount} from 'rxjs/operators';

@Injectable()
export class FriendsService {
  _friends: Observable<any> = null;

  constructor(private _http: Http) {}

  clearCache() {
    this._friends = null;
  }

  getFriends() {
    if (!this._friends) {
      this._friends = this._http.get('/api/friends').pipe(
        map((res: Response) => res.json().friends),
        tap(friends => console.log('fetched friends')),
        publishReplay(1),
        refCount(),
      );
    }
    return this._friends;
  }
}
