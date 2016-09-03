import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import {TreeNodeService} from './tree-node-service';

@Component({
  templateUrl:'./tree-view.html',
  selector:'lazy-tree-view'
})

export class LazyTreeView implements OnInit{

  @Input() root:TreeNode;
  children:any;
  items = [];
  subscription;

  constructor(private _store:Store, private _treeNodeService:TreeNodeService){
  }

  ngOnInit(){
    this.subscription = this._store.getTreeNodes(this.root.key).subscribe(res => {
      this.items = res;
    });
    this._treeNodeService.loadTreeNodes(this.root);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}