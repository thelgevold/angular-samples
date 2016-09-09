import { Component } from '@angular/core';
import { Store } from './store';
import { LogAction } from './log-action';
import { LogEntry } from './log-entry';
import { LogTailService } from './log-tail-service';
export var LogDemo = (function () {
    function LogDemo(store, logTailService) {
        this.store = store;
        this.logTailService = logTailService;
    }
    LogDemo.prototype.generateLogEntry = function () {
        var entry = new LogEntry(this.msg, this.severity);
        this.store.dispatchAction(new LogAction('ADD_ENTRY', entry));
        this.msg = '';
        this.severity = undefined;
    };
    LogDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.logTailService.getLogEntries().subscribe(function (res) { return _this.store.dispatchAction(new LogAction('LOAD_ENTRIES', res.entries)); });
    };
    LogDemo.decorators = [
        { type: Component, args: [{
                    providers: [Store, LogTailService],
                    template: "<div>\n                <h1>Error log state managed using Redux</h1>\n                <button style=\"margin-bottom: 10px;\" (click)=\"generateLogEntry()\">Add new log entry</button>\n                <input placeholder=\"message\" type=\"text\" [(ngModel)]=\"msg\" />\n                <input placeholder=\"severity\" type=\"number\" [(ngModel)]=\"severity\" />\n                <table class=\"table\">\n                     <tr>\n                        <td><strong>Message</strong></td><td><strong>Severity</strong></td>\n                     </tr>\n                     <tr *ngFor=\"let log of store.logEntries | async\">\n                        <td>{{log.text}}</td>\n                        <td>{{log.severity}}</td>\n                     </tr>\n                </table>\n                <h4><a href=\"http://www.syntaxsuccess.com/viewarticle/redux-in-angular-2.0\">Read more here</a></h4>\n              </div>"
                },] },
    ];
    LogDemo.ctorParameters = [
        { type: Store, },
        { type: LogTailService, },
    ];
    return LogDemo;
}());
