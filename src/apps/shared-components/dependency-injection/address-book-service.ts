import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {IPersons, IPerson} from '../../models';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

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
      .pipe(map(res => res.json()), 
            map((res:IPersons) => res.persons)); 
  }
}
