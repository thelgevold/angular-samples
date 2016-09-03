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
                template: `<lazy-tree-view [root]="node"></lazy-tree-view>`,
                providers: [Store, TreeNodeService]
            },] },
];
CountryDemo.ctorParameters = [];
