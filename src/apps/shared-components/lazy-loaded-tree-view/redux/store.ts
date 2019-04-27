import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {TreeNode} from '../tree-node';
import {treeNodeReducer} from './tree-node-reducer';

@Injectable()
export class Store {
  private dispatcher = new Subject<any>();
  private treeNodes = {};

  private nodes = {};

  constructor(private _http: HttpClient) {
    this.dispatcher.subscribe(action => this.handleAction(action));
  }

  private handleAction(action) {
    if (action.name === 'LOAD_NODES') {
      if (this.nodes[action.key]) {
        this.treeNodes[action.key].next(this.nodes[action.key]);
      } else {
        this._http
          .get(`/api/${action.url}`)
          .subscribe(res => {
            this.nodes[action.key] = treeNodeReducer(res, action);
            this.treeNodes[action.key].next(this.nodes[action.key]);
          });
      }
    }
  }

  getTreeNodes(key) {
    if (!this.treeNodes.hasOwnProperty(key)) {
      this.treeNodes[key] = new Subject<Array<TreeNode>>();
    }
    return this.treeNodes[key].asObservable();
  }

  dispatchAction(action) {
    this.dispatcher.next(action);
  }
}
