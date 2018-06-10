import {Component} from '@angular/core';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import {TreeNodeService} from './tree-node-service';

@Component({
  selector: 'country-demo',
  template: `<h1>Lazy loaded TreeView using Redux and RxJs</h1>
            <lazy-tree-view [root]="node"></lazy-tree-view>`,
  providers: [Store, TreeNodeService],
})
export class CountryDemo {
  node: TreeNode = null;

  ngOnInit() {
    this.node = new TreeNode('root', 'treeview-data/countries', '');
  }
}
