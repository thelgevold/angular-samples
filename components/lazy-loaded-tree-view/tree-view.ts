import {Component, Input, OnInit, ChangeDetectionStrategy} from 'angular2/core';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import {TreeNodeService} from './tree-node-service';

@Component({
  templateUrl:'./components/lazy-loaded-tree-view/tree-view.html',
  selector:'tree-view',
  directives:[TreeView]
 // changeDetection:ChangeDetectionStrategy.OnPush
})

export class TreeView implements OnInit{

  @Input() root:TreeNode;
  children:any;
  nodeText:string;

  constructor(private _store:Store, private _treeNodeService:TreeNodeService){
  }

  addNode(){
    this._treeNodeService.addNewNode(this.root, this.nodeText);
    this.nodeText = '';
  }

  expand(node){
    node.expand();

   // this.children = this._store.getChildren(node.key);
    //this._treeNodeService.loadTreeNodes(node);
  }

  ngOnInit(){

    this.children = this._store.getChildren(this.root.key);

    this._treeNodeService.loadTreeNodes(this.root);

    this.children.subscribe(a => {
      console.log('----------------');
      console.log(a);
    });

  }
}