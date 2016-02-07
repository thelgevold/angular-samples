import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http,Response} from 'angular2/http';

import {Store} from './store';
import {LogAction} from './log-action';
import {LogEntry} from './log-entry';

@Component({
    providers:[Store],
    template:`<div>
                <h1>Log state managed using Redux</h1>
                <button style="margin-bottom: 10px;" (click)="generateLogEntry()">Simulate new log entry</button>
                <input type="text" [(ngModel)]="msg" />
                <input type="number" [(ngModel)]="severity" />
                <table class="table">
                     <tr>
                        <td>Message</td><td>Severity</td>
                     </tr>
                     <tr *ngFor="#log of store.log | async">
                        <td>{{log.text}}</td>
                        <td>{{log.severity}}</td>
                     </tr>
                </table>
              </div>`
})

export class LogDemo implements OnInit{

    store:Store;
    http:Http;
    msg:string;
    severity:number;

    constructor(store:Store, http:Http){
        this.store = store;
        this.http = http;
    }

    generateLogEntry(){
        let entry = new LogEntry(this.msg, this.severity);
        this.store.dispatchAction(new LogAction('ADD_ENTRY',entry));
        this.msg = '';
        this.severity = undefined;
    }

    ngOnInit(){
        this.http.get('./components/log-tail/log.json')
            .map((res: Response) => res.json())
            .subscribe((res) => this.store.dispatchAction(new LogAction('LOAD_ENTRIES', res.entries)));
    }

}