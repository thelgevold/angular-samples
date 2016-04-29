System.register(['angular2/core', './store', './log-action', './log-entry', './log-tail-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, store_1, log_action_1, log_entry_1, log_tail_service_1;
    var LogDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (log_action_1_1) {
                log_action_1 = log_action_1_1;
            },
            function (log_entry_1_1) {
                log_entry_1 = log_entry_1_1;
            },
            function (log_tail_service_1_1) {
                log_tail_service_1 = log_tail_service_1_1;
            }],
        execute: function() {
            LogDemo = (function () {
                function LogDemo(store, logTailService) {
                    this.store = store;
                    this.logTailService = logTailService;
                }
                LogDemo.prototype.generateLogEntry = function () {
                    var entry = new log_entry_1.LogEntry(this.msg, this.severity);
                    this.store.dispatchAction(new log_action_1.LogAction('ADD_ENTRY', entry));
                    this.msg = '';
                    this.severity = undefined;
                };
                LogDemo.prototype.ngOnInit = function () {
                    var _this = this;
                    this.logTailService.getLogEntries().subscribe(function (res) { return _this.store.dispatchAction(new log_action_1.LogAction('LOAD_ENTRIES', res.entries)); });
                };
                LogDemo = __decorate([
                    core_1.Component({
                        providers: [store_1.Store, log_tail_service_1.LogTailService],
                        template: "<div>\n                <h1>Error log state managed using Redux</h1>\n                <button style=\"margin-bottom: 10px;\" (click)=\"generateLogEntry()\">Add new log entry</button>\n                <input placeholder=\"message\" type=\"text\" [(ngModel)]=\"msg\" />\n                <input placeholder=\"severity\" type=\"number\" [(ngModel)]=\"severity\" />\n                <table class=\"table\">\n                     <tr>\n                        <td><strong>Message</strong></td><td><strong>Severity</strong></td>\n                     </tr>\n                     <tr *ngFor=\"let log of store.log | async\">\n                        <td>{{log.text}}</td>\n                        <td>{{log.severity}}</td>\n                     </tr>\n                </table>\n                <h4><a href=\"http://www.syntaxsuccess.com/viewarticle/redux-in-angular-2.0\">Read more here</a></h4>\n              </div>"
                    }), 
                    __metadata('design:paramtypes', [store_1.Store, log_tail_service_1.LogTailService])
                ], LogDemo);
                return LogDemo;
            }());
            exports_1("LogDemo", LogDemo);
        }
    }
});
//# sourceMappingURL=log-demo.js.map