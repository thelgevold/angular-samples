import {TreeNode} from '../tree-node';

export const treeNodeReducer = (state: any = [], action) => {
  switch (action.name) {

    case 'ADD_NODE':
      return [...state, action.data];

    case 'LOAD_NODES':
      return action.data.nodes.map(n => {
        return new TreeNode(n.key,n.url,n.name);
      });

    case 'ADD_NEW_NODE':
      return [...state, new TreeNode(null,null,action.data)];

    case 'LOAD_EXISTING_NODES':
      return state;
  }
};