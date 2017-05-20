import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {Algorithms} from '../../components/algorithms/algorithms';
import {InsertionSort} from '../../components/insertion-sort/insertion-sort';

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