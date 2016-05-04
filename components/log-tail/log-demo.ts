import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Store} from './store';
import {LogAction} from './log-action';
import {LogEntry} from './log-entry';
import {LogTailService} from './log-tail-service';

@Component({
    providers:[Store,LogTailService],
    template:`<div>
                <h1>Error log state managed using Redux</h1>
                <button style="margin-bottom: 10px;" (click)="generateLogEntry()">Add new log entry</button>
                <input placeholder="message" type="text" [(ngModel)]="msg" />
                <input placeholder="severity" type="number" [(ngModel)]="severity" />
                <table class="table">
                     <tr>
                        <td><strong>Message</strong></td><td><strong>Severity</strong></td>
                     </tr>
                     <tr *ngFor="let log of store.log | async">
                        <td>{{log.text}}</td>
                        <td>{{log.severity}}</td>
                     </tr>
                </table>
                <h4><a href="http://www.syntaxsuccess.com/viewarticle/redux-in-angular-2.0">Read more here</a></h4>
              </div>`
})

export class LogDemo implements OnInit{

    store:Store;
    msg:string;
    severity:number;
    logTailService:LogTailService

    constructor(store:Store, logTailService:LogTailService){
        this.store = store;
        this.logTailService = logTailService;
    }

    generateLogEntry(){
        let entry = new LogEntry(this.msg, this.severity);
        this.store.dispatchAction(new LogAction('ADD_ENTRY',entry));
        this.msg = '';
        this.severity = undefined;
    }

    ngOnInit(){
        this.logTailService.getLogEntries().subscribe((res) => this.store.dispatchAction(new LogAction('LOAD_ENTRIES', res.entries)));
    }
}