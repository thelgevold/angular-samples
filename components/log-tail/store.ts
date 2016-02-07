import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {LogAction} from './log-action';
import {LogEntry} from './log-entry';
import {logReducer} from './log-reducer';

export class Store{

    private dispatcher = new Subject<LogAction>();
    log = new Subject<Array<LogEntry>>();

    private _logItems = [];

    constructor(){
        this.dispatcher.subscribe((action) => this.handleAction(action));
    }

    handleAction(action) {
        this._logItems = logReducer(this._logItems, action);
        this.log.next(this._logItems);
    }

    dispatchAction(action){
        this.dispatcher.next(action);
    }
}