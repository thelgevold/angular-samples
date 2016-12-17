import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { treeNodeReducer } from './tree-node-reducer';
export class Store {
    constructor(_http) {
        this._http = _http;
        this.dispatcher = new Subject();
        this.treeNodes = {};
        this.nodes = {};
        this.dispatcher.subscribe((action) => this.handleAction(action));
    }
    handleAction(action) {
        if (action.name === 'LOAD_NODES') {
            if (this.nodes[action.key]) {
                this.treeNodes[action.key].next(this.nodes[action.key]);
            }
            else {
                this._http
                    .get(action.url)
                    .map((res) => res.json())
                    .subscribe(res => {
                    this.nodes[action.key] = treeNodeReducer(res, action);
                    this.treeNodes[action.key].next(this.nodes[action.key]);
                });
            }
        }
    }
    getTreeNodes(key) {
        if (!this.treeNodes.hasOwnProperty(key)) {
            this.treeNodes[key] = new Subject();
        }
        return this.treeNodes[key].asObservable();
    }
    dispatchAction(action) {
        this.dispatcher.next(action);
    }
}
Store.decorators = [
    { type: Injectable },
];
Store.ctorParameters = () => [
    { type: Http, },
];
