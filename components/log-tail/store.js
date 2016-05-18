System.register(['rxjs/Subject', './log-reducer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subject_1, log_reducer_1;
    var Store;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (log_reducer_1_1) {
                log_reducer_1 = log_reducer_1_1;
            }],
        execute: function() {
            Store = (function () {
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
            exports_1("Store", Store);
        }
    }
});
//# sourceMappingURL=store.js.map