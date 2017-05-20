"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tree_node_1 = require("./tree-node");
var store_1 = require("./redux/store");
var tree_node_service_1 = require("./tree-node-service");
var LazyTreeView = (function () {
    function LazyTreeView(_store, _treeNodeService) {
        this._store = _store;
        this._treeNodeService = _treeNodeService;
        this.items = [];
    }
    LazyTreeView.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._store.getTreeNodes(this.root.key).subscribe(function (res) {
            _this.items = res;
        });
        this._treeNodeService.loadTreeNodes(this.root);
    };
    LazyTreeView.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return LazyTreeView;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", tree_node_1.TreeNode)
], LazyTreeView.prototype, "root", void 0);
LazyTreeView = __decorate([
    core_1.Component({
        template: "\n  <ul>\n  <li *ngFor=\"let node of items\">\n\n    <span class=\"iconButton\" [ngClass]='{\"tree-node-no-children\": !node.showIcon}' (click)=\"node.expand()\">{{node.icon}}</span>\n    <span>{{ node.name }}</span>\n\n    <div *ngIf=\"node.expanded\">\n      <lazy-tree-view [root]=\"node\"></lazy-tree-view>\n    </div>\n  </li>\n  </ul>\n",
        selector: 'lazy-tree-view'
    }),
    __metadata("design:paramtypes", [store_1.Store, tree_node_service_1.TreeNodeService])
], LazyTreeView);
exports.LazyTreeView = LazyTreeView;
