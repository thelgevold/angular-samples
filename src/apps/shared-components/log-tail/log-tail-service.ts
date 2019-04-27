import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ILog} from '../../models';

@Injectable()
export class LogTailService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getLogEntries(): Observable<Array<ILog>> {
    return this.http.get<Array<ILog>>('/api/log');
  }
}
