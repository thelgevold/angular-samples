import { Subject } from 'rxjs/Subject';
import { logReducer } from './log-reducer';
export var Store = (function () {
    function Store() {
        var _this = this;
        this.dispatcher = new Subject();
        this.log = new Subject();
        this.logItems = [];
        this.dispatcher.subscribe(function (action) { return _this.handleAction(action); });
        this.logEntries = this.log.asObservable();
    }
    Store.prototype.handleAction = function (action) {
        this.logItems = logReducer(this.logItems, action);
        this.log.next(this.logItems);
    };
    Store.prototype.dispatchAction = function (action) {
        this.dispatcher.next(action);
    };
    return Store;
}());
