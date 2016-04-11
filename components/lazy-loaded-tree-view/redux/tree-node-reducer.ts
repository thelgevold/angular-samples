import {TreeNode} from '../tree-node';

export const treeNodeReducer = (state: any = [], action) => {
  switch (action.name) {

    case 'LOAD_NODES':
      return state.nodes.map(n => {
        return new TreeNode(n.key,n.url,n.name);
      });

    case 'ADD_NEW_NODE':
      return [...state, new TreeNode(null,null,action.data)];

  }
};