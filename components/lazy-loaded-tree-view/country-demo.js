import { Component } from '@angular/core';
import { TreeNode } from './tree-node';
import { Store } from './redux/store';
import { TreeNodeService } from './tree-node-service';
export class CountryDemo {
    constructor() {
        this.node = null;
    }
    ngOnInit() {
        this.node = new TreeNode('root', './tree-view-data/countries.json', '');
    }
}
CountryDemo.decorators = [
    { type: Component, args: [{
                selector: 'country-demo',
                template: `<h1>Lazy loaded TreeView using Redux and RxJs</h1>
            <lazy-tree-view [root]="node"></lazy-tree-view>`,
                providers: [Store, TreeNodeService]
            },] },
];
CountryDemo.ctorParameters = () => [];
