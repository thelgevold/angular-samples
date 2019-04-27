import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IFriends} from '../../models';
import {publishReplay, map, tap, refCount} from 'rxjs/operators';

@Injectable()
export class FriendsService {
  _friends: Observable<any> = null;

  constructor(private _http: HttpClient) {}

  clearCache() {
    this._friends = null;
  }

  getFriends() {
    if (!this._friends) {
      this._friends = this._http.get('/api/friends').pipe(
        map((res: IFriends) => res.friends),
        publishReplay(1),
        refCount(),
      );
    }
    return this._friends;
  }
}
