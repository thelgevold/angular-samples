"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tree_node_1 = require("./tree-node");
var store_1 = require("./redux/store");
var tree_node_service_1 = require("./tree-node-service");
var CountryDemo = (function () {
    function CountryDemo() {
        this.node = null;
    }
    CountryDemo.prototype.ngOnInit = function () {
        this.node = new tree_node_1.TreeNode('root', './tree-view-data/countries.json', '');
    };
    CountryDemo = __decorate([
        core_1.Component({
            selector: 'country-demo',
            template: "<h1>Lazy loaded TreeView using Redux and RxJs</h1>\n            <lazy-tree-view [root]=\"node\"></lazy-tree-view>",
            providers: [store_1.Store, tree_node_service_1.TreeNodeService]
        })
    ], CountryDemo);
    return CountryDemo;
}());
exports.CountryDemo = CountryDemo;
