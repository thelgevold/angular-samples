import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import 'rxjs/add/operator/map';

import {CountryDemo} from '../../components/lazy-loaded-tree-view/country-demo';
import {LazyTreeView} from '../../components/lazy-loaded-tree-view/tree-view';

@NgModule({
  declarations: [CountryDemo, LazyTreeView],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(
    [
      {path: '', component: CountryDemo}
    ])
  ]
})
export class LazyTreeviewModule {}