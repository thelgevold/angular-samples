import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RxJsBuffering} from '../../shared-components/rxjs-buffering/rxjs-buffering';

@NgModule({
  declarations: [RxJsBuffering],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: RxJsBuffering}]),
  ],
})
export class RxJsBufferingModule {}
