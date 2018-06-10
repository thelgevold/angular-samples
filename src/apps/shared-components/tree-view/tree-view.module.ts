import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {TreeViewDemo} from './tree-view-demo';
import {TreeView} from './tree-view';

@NgModule({
  imports: [SharedModule],
  declarations: [TreeView, TreeViewDemo],
})
export class TreeViewModule {}
