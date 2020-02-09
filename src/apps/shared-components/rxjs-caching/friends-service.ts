import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {publishReplay, refCount} from 'rxjs/operators';

@Injectable()
export class FriendsService {
  _friends: Observable<any> = null;

  constructor(private _http: HttpClient) {}

  clearCache() {
    this._friends = null;
  }

  getFriends() {
    if (!this._friends) {
      this._friends = this._http
        .get('/api/friends')
        .pipe(publishReplay(1), refCount());
    }
    return this._friends;
  }
}
