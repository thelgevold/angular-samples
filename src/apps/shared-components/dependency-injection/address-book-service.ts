import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class AddressBookService {
  http: Http;
  constructor(http: Http) {
    console.log('Creating AddressBookService');
    this.http = http;
  }

  getEntries(): Observable<any> {
    return this.http
      .get('http://localhost:9000/api/people')
      .pipe(map((res: Response) => res.json()));
  }
}
