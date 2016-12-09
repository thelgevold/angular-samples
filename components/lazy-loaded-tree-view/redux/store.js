var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { treeNodeReducer } from './tree-node-reducer';
export let Store = class Store {
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
};
Store = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Http])
], Store);
