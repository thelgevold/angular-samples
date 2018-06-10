import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class LogTailService {
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getLogEntries(): Observable<{entries: {}}> {
    return this.http
      .get('http://localhost:9000/api/log')
      .pipe(map((res: Response) => res.json()));
  }
}
