"use strict";
var tree_node_1 = require("../tree-node");
exports.treeNodeReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.name) {
        case 'LOAD_NODES':
            return state['nodes'].map(function (n) {
                return new tree_node_1.TreeNode(n.key, n.url, n.name);
            });
    }
};
