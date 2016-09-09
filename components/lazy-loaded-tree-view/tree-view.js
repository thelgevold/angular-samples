import { Component, Input } from '@angular/core';
import { Store } from './redux/store';
import { TreeNodeService } from './tree-node-service';
export var LazyTreeView = (function () {
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
    LazyTreeView.decorators = [
        { type: Component, args: [{
                    templateUrl: './tree-view.html',
                    selector: 'lazy-tree-view'
                },] },
    ];
    LazyTreeView.ctorParameters = [
        { type: Store, },
        { type: TreeNodeService, },
    ];
    LazyTreeView.propDecorators = {
        'root': [{ type: Input },],
    };
    return LazyTreeView;
}());
