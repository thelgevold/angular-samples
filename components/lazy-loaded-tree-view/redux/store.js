import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { treeNodeReducer } from './tree-node-reducer';
export var Store = (function () {
    function Store(_http) {
        var _this = this;
        this._http = _http;
        this.dispatcher = new Subject();
        this.treeNodes = {};
        this.nodes = {};
        this.dispatcher.subscribe(function (action) { return _this.handleAction(action); });
    }
    Store.prototype.handleAction = function (action) {
        var _this = this;
        if (action.name === 'LOAD_NODES') {
            if (this.nodes[action.key]) {
                this.treeNodes[action.key].next(this.nodes[action.key]);
            }
            else {
                this._http
                    .get(action.url)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    _this.nodes[action.key] = treeNodeReducer(res, action);
                    _this.treeNodes[action.key].next(_this.nodes[action.key]);
                });
            }
        }
    };
    Store.prototype.getTreeNodes = function (key) {
        if (!this.treeNodes.hasOwnProperty(key)) {
            this.treeNodes[key] = new Subject();
        }
        return this.treeNodes[key].asObservable();
    };
    Store.prototype.dispatchAction = function (action) {
        this.dispatcher.next(action);
    };
    Store.decorators = [
        { type: Injectable },
    ];
    Store.ctorParameters = [
        { type: Http, },
    ];
    return Store;
}());
