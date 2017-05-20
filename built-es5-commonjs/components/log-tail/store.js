"use strict";
var Subject_1 = require("rxjs/Subject");
var log_reducer_1 = require("./log-reducer");
var Store = (function () {
    function Store() {
        var _this = this;
        this.dispatcher = new Subject_1.Subject();
        this.log = new Subject_1.Subject();
        this.logItems = [];
        this.dispatcher.subscribe(function (action) { return _this.handleAction(action); });
        this.logEntries = this.log.asObservable();
    }
    Store.prototype.handleAction = function (action) {
        this.logItems = log_reducer_1.logReducer(this.logItems, action);
        this.log.next(this.logItems);
    };
    Store.prototype.dispatchAction = function (action) {
        this.dispatcher.next(action);
    };
    return Store;
}());
exports.Store = Store;
