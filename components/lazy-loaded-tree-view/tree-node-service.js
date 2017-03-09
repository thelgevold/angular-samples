import { Injectable } from '@angular/core';
import { Store } from './redux/store';
var TreeNodeService = (function () {
    function TreeNodeService(_store) {
        this._store = _store;
    }
    TreeNodeService.prototype.loadTreeNodes = function (root) {
        if (root.url) {
            this._store.dispatchAction({ key: root.key, url: root.url, name: 'LOAD_NODES' });
        }
    };
    return TreeNodeService;
}());
export { TreeNodeService };
TreeNodeService.decorators = [
    { type: Injectable },
];
TreeNodeService.ctorParameters = function () { return [
    { type: Store, },
]; };
