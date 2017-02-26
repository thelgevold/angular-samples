import { TreeNode } from '../tree-node';
export var treeNodeReducer = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.name) {
        case 'LOAD_NODES':
            return state.nodes.map(function (n) {
                return new TreeNode(n.key, n.url, n.name);
            });
    }
};
