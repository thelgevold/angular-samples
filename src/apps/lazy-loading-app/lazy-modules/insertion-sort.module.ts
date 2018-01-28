import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {Algorithms} from '../../shared-components/algorithms/algorithms';
import {InsertionSort} from '../../shared-components/algorithms/insertion-sort';

@NgModule({
  declarations: [Algorithms, InsertionSort],
  imports: [
    CommonModule,
    RouterModule.forChild(
    [
      {path: '', component: Algorithms}
    ])
  ]
})
export class InsertionSortModule {}