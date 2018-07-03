import {Observable, Subject} from 'rxjs';

import {LogAction} from './log-action';
import {logReducer} from './log-reducer';

import {ILog} from '../../models';

export class Store {
  private dispatcher = new Subject<LogAction>();
  private log = new Subject<Array<ILog>>();
  public logEntries;
  private logItems = [];

  constructor() {
    this.dispatcher.subscribe(action => this.handleAction(action));
    this.logEntries = this.log.asObservable();
  }

  private handleAction(action) {
    this.logItems = logReducer(this.logItems, action);
    this.log.next(this.logItems);
  }

  dispatchAction(action) {
    this.dispatcher.next(action);
  }
}
