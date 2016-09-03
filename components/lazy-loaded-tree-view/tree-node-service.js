import { Injectable } from '@angular/core';
import { Store } from './redux/store';
export class TreeNodeService {
    constructor(_store) {
        this._store = _store;
    }
    loadTreeNodes(root) {
        if (root.url) {
            this._store.dispatchAction({ key: root.key, url: root.url, name: 'LOAD_NODES' });
        }
    }
}
TreeNodeService.decorators = [
    { type: Injectable },
];
TreeNodeService.ctorParameters = [
    { type: Store, },
];
