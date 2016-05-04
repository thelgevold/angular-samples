System.register(['@angular/core', './tree-view', './tree-node', './redux/store', './tree-node-service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tree_view_1, tree_node_1, store_1, tree_node_service_1;
    var CountryDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tree_view_1_1) {
                tree_view_1 = tree_view_1_1;
            },
            function (tree_node_1_1) {
                tree_node_1 = tree_node_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (tree_node_service_1_1) {
                tree_node_service_1 = tree_node_service_1_1;
            }],
        execute: function() {
            CountryDemo = (function () {
                function CountryDemo() {
                    this.node = null;
                }
                CountryDemo.prototype.ngOnInit = function () {
                    this.node = new tree_node_1.TreeNode('root', './tree-view-data/countries.json', '');
                };
                CountryDemo = __decorate([
                    core_1.Component({
                        template: "<tree-view [root]=\"node\"></tree-view>",
                        directives: [tree_view_1.TreeView],
                        providers: [store_1.Store, tree_node_service_1.TreeNodeService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CountryDemo);
                return CountryDemo;
            }());
            exports_1("CountryDemo", CountryDemo);
        }
    }
});
//# sourceMappingURL=country-demo.js.map