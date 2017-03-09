import { Component, Input } from '@angular/core';
var TreeView = (function () {
    function TreeView() {
    }
    return TreeView;
}());
export { TreeView };
TreeView.decorators = [
    { type: Component, args: [{
                selector: 'tree-view',
                templateUrl: './tree-view.html'
            },] },
];
TreeView.ctorParameters = function () { return []; };
TreeView.propDecorators = {
    'directories': [{ type: Input },],
};
