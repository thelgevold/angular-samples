import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RxJsStreams} from '../../shared-components/rxjs-streams/rxjs-streams';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@NgModule({
  declarations: [RxJsStreams],
  imports: [
    CommonModule,
    RouterModule.forChild(
    [
      {path: '', component: RxJsStreams}
    ])
  ]
})
export class RxJsStreamsModule {}