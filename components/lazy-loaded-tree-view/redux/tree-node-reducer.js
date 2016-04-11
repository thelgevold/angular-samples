System.register(['../tree-node'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tree_node_1;
    var treeNodeReducer;
    return {
        setters:[
            function (tree_node_1_1) {
                tree_node_1 = tree_node_1_1;
            }],
        execute: function() {
            exports_1("treeNodeReducer", treeNodeReducer = function (state, action) {
                if (state === void 0) { state = []; }
                switch (action.name) {
                    case 'LOAD_NODES':
                        return state.nodes.map(function (n) {
                            return new tree_node_1.TreeNode(n.key, n.url, n.name);
                        });
                    case 'ADD_NEW_NODE':
                        return state.concat([new tree_node_1.TreeNode(null, null, action.data)]);
                }
            });
        }
    }
});
//# sourceMappingURL=tree-node-reducer.js.map