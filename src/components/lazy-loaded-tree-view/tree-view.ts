import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import {TreeNodeService} from './tree-node-service';

@Component({
  template: `
  <ul>
  <li *ngFor="let node of items">

    <span class="iconButton" [ngClass]='{"tree-node-no-children": !node.showIcon}' (click)="node.expand()">{{node.icon}}</span>
    <span>{{ node.name }}</span>

    <div *ngIf="node.expanded">
      <lazy-tree-view [root]="node"></lazy-tree-view>
    </div>
  </li>
  </ul>
`,
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