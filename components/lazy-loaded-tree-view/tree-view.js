var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { TreeNode } from './tree-node';
import { Store } from './redux/store';
import { TreeNodeService } from './tree-node-service';
export let LazyTreeView = class LazyTreeView {
    constructor(_store, _treeNodeService) {
        this._store = _store;
        this._treeNodeService = _treeNodeService;
        this.items = [];
    }
    ngOnInit() {
        this.subscription = this._store.getTreeNodes(this.root.key).subscribe(res => {
            this.items = res;
        });
        this._treeNodeService.loadTreeNodes(this.root);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', TreeNode)
], LazyTreeView.prototype, "root", void 0);
LazyTreeView = __decorate([
    Component({
        templateUrl: './components/lazy-loaded-tree-view/tree-view.html',
        selector: 'lazy-tree-view'
    }), 
    __metadata('design:paramtypes', [Store, TreeNodeService])
], LazyTreeView);
