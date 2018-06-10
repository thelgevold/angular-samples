import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {CountryDemo} from './country-demo';
import {LazyTreeView} from './tree-view';

@NgModule({
  imports: [SharedModule],
  declarations: [CountryDemo, LazyTreeView],
})
export class LazyLoadedTreeViewModule {}
