import { Component, Input } from '@angular/core';
export var TreeView = (function () {
    function TreeView() {
    }
    TreeView.decorators = [
        { type: Component, args: [{
                    selector: 'tree-view',
                    templateUrl: './tree-view.html'
                },] },
    ];
    TreeView.ctorParameters = [];
    TreeView.propDecorators = {
        'directories': [{ type: Input },],
    };
    return TreeView;
}());
