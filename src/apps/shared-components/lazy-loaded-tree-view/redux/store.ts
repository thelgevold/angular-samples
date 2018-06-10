import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Http, Response} from '@angular/http';
import {TreeNode} from '../tree-node';
import {treeNodeReducer} from './tree-node-reducer';

@Injectable()
export class Store {
  private dispatcher = new Subject<any>();
  private treeNodes = {};

  private nodes = {};

  constructor(private _http: Http) {
    this.dispatcher.subscribe(action => this.handleAction(action));
  }

  private handleAction(action) {
    if (action.name === 'LOAD_NODES') {
      if (this.nodes[action.key]) {
        this.treeNodes[action.key].next(this.nodes[action.key]);
      } else {
        this._http
          .get(`http://localhost:9000/api/${action.url}`)
          .pipe(map((res: Response) => res.json()))
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
