import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {IPerson} from '../../models';

@Injectable()
export class AddressBookService {
  http: Http;
  constructor(http: Http) {
    console.log('Creating AddressBookService');
    this.http = http;
  }

  getEntries(): Observable<Array<IPerson>> {
    return this.http
      .get('/api/people')
      .pipe(map((res: Response) => res.json().people));
  }
}
