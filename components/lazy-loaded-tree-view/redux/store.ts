import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {TreeNode} from '../tree-node';
import {treeNodeReducer} from './tree-node-reducer';

export class Store{

  private dispatcher = new Subject<any>();
  private treeNodes = {};

  private nodes = {};

  constructor(){
    this.dispatcher.subscribe((action) => this.handleAction(action));
  }

  private handleAction(action) {
    this.nodes[action.key] = treeNodeReducer(this.nodes[action.key], action);
    this.treeNodes[action.key].next(this.nodes[action.key]);
  }

  dataAlreadyLoaded(key){
    return this.nodes.hasOwnProperty(key);
  }

  getChildren(key){
    if(!this.treeNodes.hasOwnProperty(key)){
      this.treeNodes[key] = new Subject<Array<TreeNode>>();
    }
    return this.treeNodes[key].asObservable().share();
  }

  dispatchAction(action){
    this.dispatcher.next(action);
  }
}