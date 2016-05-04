import {Component} from '@angular/core';
import {TreeView} from './tree-view';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import {TreeNodeService} from './tree-node-service';

@Component({
  template:`<tree-view [root]="node"></tree-view>`,
  directives:[TreeView],
  providers:[Store,TreeNodeService]
})

export class CountryDemo{
  node:TreeNode = null;

  ngOnInit(){
    this.node = new TreeNode('root','./tree-view-data/countries.json', '');
  }
}