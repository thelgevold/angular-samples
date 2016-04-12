System.register(['angular2/core', './tree-node', './redux/store', './tree-node-service'], function(exports_1, context_1) {
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
    var core_1, tree_node_1, store_1, tree_node_service_1;
    var TreeView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            TreeView = (function () {
                function TreeView(_store, _treeNodeService) {
                    this._store = _store;
                    this._treeNodeService = _treeNodeService;
                    this.items = [];
                }
                TreeView.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this._store.getTreeNodes(this.root.key).subscribe(function (res) {
                        _this.items = res;
                    });
                    this._treeNodeService.loadTreeNodes(this.root);
                };
                TreeView.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', tree_node_1.TreeNode)
                ], TreeView.prototype, "root", void 0);
                TreeView = __decorate([
                    core_1.Component({
                        templateUrl: './components/lazy-loaded-tree-view/tree-view.html',
                        selector: 'tree-view',
                        directives: [TreeView]
                    }), 
                    __metadata('design:paramtypes', [store_1.Store, tree_node_service_1.TreeNodeService])
                ], TreeView);
                return TreeView;
            }());
            exports_1("TreeView", TreeView);
        }
    }
});
//# sourceMappingURL=tree-view.js.map