import { Component, Input } from '@angular/core';
import { Store } from './redux/store';
import { TreeNodeService } from './tree-node-service';
export class LazyTreeView {
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
}
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
