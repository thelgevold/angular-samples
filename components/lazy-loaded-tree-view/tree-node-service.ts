import {Injectable} from 'angular2/core';
import {Http,Response} from 'angular2/http';
import {Store} from './redux/store';

@Injectable()
export class TreeNodeService{

  constructor(private _http:Http, private _store:Store){
  }

  addNewNode(root,newNode){
    this._store.dispatchAction({key:root.key, name:'ADD_NEW_NODE', data:newNode});
  }

  loadTreeNodes(root){
    this._store.dispatchAction({key:root.key, url:root.url, name:'LOAD_NODES'})
  }

}