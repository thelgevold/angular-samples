import { Component } from '@angular/core';
import { TreeNode } from './tree-node';
import { Store } from './redux/store';
import { TreeNodeService } from './tree-node-service';
var CountryDemo = (function () {
    function CountryDemo() {
        this.node = null;
    }
    CountryDemo.prototype.ngOnInit = function () {
        this.node = new TreeNode('root', './tree-view-data/countries.json', '');
    };
    return CountryDemo;
}());
export { CountryDemo };
CountryDemo.decorators = [
    { type: Component, args: [{
                selector: 'country-demo',
                template: "<h1>Lazy loaded TreeView using Redux and RxJs</h1>\n            <lazy-tree-view [root]=\"node\"></lazy-tree-view>",
                providers: [Store, TreeNodeService]
            },] },
];
CountryDemo.ctorParameters = function () { return []; };
