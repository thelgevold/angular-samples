import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IPerson} from '../../models';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class AddressBookService {
  http: HttpClient;
  constructor(http: HttpClient) {
    console.log('Creating AddressBookService');
    this.http = http;
  }

  getEntries(): Observable<Array<IPerson>> {
    return this.http.get('/api/people').pipe(map((res: Array<IPerson>) => res));
  }
}
