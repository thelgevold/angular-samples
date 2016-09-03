import { Component } from '@angular/core';
import { Store } from './store';
import { LogAction } from './log-action';
import { LogEntry } from './log-entry';
import { LogTailService } from './log-tail-service';
export class LogDemo {
    constructor(store, logTailService) {
        this.store = store;
        this.logTailService = logTailService;
    }
    generateLogEntry() {
        let entry = new LogEntry(this.msg, this.severity);
        this.store.dispatchAction(new LogAction('ADD_ENTRY', entry));
        this.msg = '';
        this.severity = undefined;
    }
    ngOnInit() {
        this.logTailService.getLogEntries().subscribe((res) => this.store.dispatchAction(new LogAction('LOAD_ENTRIES', res.entries)));
    }
}
LogDemo.decorators = [
    { type: Component, args: [{
                providers: [Store, LogTailService],
                template: `<div>
                <h1>Error log state managed using Redux</h1>
                <button style="margin-bottom: 10px;" (click)="generateLogEntry()">Add new log entry</button>
                <input placeholder="message" type="text" [(ngModel)]="msg" />
                <input placeholder="severity" type="number" [(ngModel)]="severity" />
                <table class="table">
                     <tr>
                        <td><strong>Message</strong></td><td><strong>Severity</strong></td>
                     </tr>
                     <tr *ngFor="let log of store.logEntries | async">
                        <td>{{log.text}}</td>
                        <td>{{log.severity}}</td>
                     </tr>
                </table>
                <h4><a href="http://www.syntaxsuccess.com/viewarticle/redux-in-angular-2.0">Read more here</a></h4>
              </div>`
            },] },
];
LogDemo.ctorParameters = [
    { type: Store, },
    { type: LogTailService, },
];
