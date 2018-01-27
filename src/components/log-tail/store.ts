import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {LogAction} from './log-action';
import {LogEntry} from './log-entry';
import {logReducer} from './log-reducer';

export class Store{

    private dispatcher = new Subject<LogAction>();
    private log = new Subject<Array<LogEntry>>();
    public logEntries;
    private logItems = [];

    constructor(){
        this.dispatcher.subscribe((action) => this.handleAction(action));
        this.logEntries = this.log.asObservable();
    }

    private handleAction(action) {
        this.logItems = logReducer(this.logItems, action);
        this.log.next(this.logItems);
    }

    dispatchAction(action){
        this.dispatcher.next(action);
    }
}