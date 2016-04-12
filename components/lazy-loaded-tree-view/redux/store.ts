import {Injectable} from 'angular2/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Http,Response} from 'angular2/http';
import {TreeNode} from '../tree-node';
import {treeNodeReducer} from './tree-node-reducer';

@Injectable()
export class Store{

  private dispatcher = new Subject<any>();
  private treeNodes = {};

  private nodes = {};

  constructor(private _http:Http){
    this.dispatcher.subscribe((action) => this.handleAction(action));
  }

  private handleAction(action) {

    if(action.name === 'LOAD_NODES') {
      if (this.nodes[action.key]) {
        this.treeNodes[action.key].next(this.nodes[action.key]);
      }
      else {
        this._http
            .get(action.url)
            .map((res:Response) => res.json())
            .subscribe(res => {
              this.nodes[action.key] = treeNodeReducer(res, action);
              this.treeNodes[action.key].next(this.nodes[action.key]);
            });
      }
    }
  }

  getChildren(key){
    if(!this.treeNodes.hasOwnProperty(key)){
      this.treeNodes[key] = new Subject<Array<TreeNode>>();
    }
    return this.treeNodes[key].asObservable();
  }

  dispatchAction(action){
    this.dispatcher.next(action);
  }
}