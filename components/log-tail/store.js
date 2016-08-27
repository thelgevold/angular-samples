import { Subject } from 'rxjs/Subject';
import { logReducer } from './log-reducer';
export class Store {
    constructor() {
        this.dispatcher = new Subject();
        this.log = new Subject();
        this.logItems = [];
        this.dispatcher.subscribe((action) => this.handleAction(action));
        this.logEntries = this.log.asObservable();
    }
    handleAction(action) {
        this.logItems = logReducer(this.logItems, action);
        this.log.next(this.logItems);
    }
    dispatchAction(action) {
        this.dispatcher.next(action);
    }
}
