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

    if(this._store.dataAlreadyLoaded(root.key)){
      this._store.dispatchAction({key:root.key, name:'LOAD_EXISTING_NODES'});
    }

    else {
      this._http.get(root.url)
        .map((res:Response) => res.json())
        .subscribe(res => this._store.dispatchAction({key:root.key, data:res, name:'LOAD_NODES'}));
    }
  }

}