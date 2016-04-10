System.register(['rxjs/Subject', './tree-node-reducer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Subject_1, tree_node_reducer_1;
    var Store;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (tree_node_reducer_1_1) {
                tree_node_reducer_1 = tree_node_reducer_1_1;
            }],
        execute: function() {
            Store = (function () {
                function Store() {
                    var _this = this;
                    this.dispatcher = new Subject_1.Subject();
                    this.treeNodes = {};
                    this.nodes = {};
                    this.dispatcher.subscribe(function (action) { return _this.handleAction(action); });
                }
                Store.prototype.handleAction = function (action) {
                    this.nodes[action.key] = tree_node_reducer_1.treeNodeReducer(this.nodes[action.key], action);
                    this.treeNodes[action.key].next(this.nodes[action.key]);
                };
                Store.prototype.dataAlreadyLoaded = function (key) {
                    return this.nodes.hasOwnProperty(key);
                };
                Store.prototype.getChildren = function (key) {
                    if (!this.treeNodes.hasOwnProperty(key)) {
                        this.treeNodes[key] = new Subject_1.Subject();
                    }
                    return this.treeNodes[key].asObservable().share();
                };
                Store.prototype.dispatchAction = function (action) {
                    this.dispatcher.next(action);
                };
                return Store;
            }());
            exports_1("Store", Store);
        }
    }
});
//# sourceMappingURL=store.js.map