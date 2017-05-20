import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RxJsBuffering} from '../../components/rxjs-buffering/rxjs-buffering';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/bufferCount';

@NgModule({
  declarations: [RxJsBuffering],
  imports: [
    CommonModule,
    RouterModule.forChild(
    [
      {path: '', component: RxJsBuffering}
    ])
  ]
})
export class RxJsBufferingModule {}