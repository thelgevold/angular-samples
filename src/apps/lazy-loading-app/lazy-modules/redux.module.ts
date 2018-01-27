import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {LogDemo} from '../../shared-components/log-tail/log-demo';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [LogDemo],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(
    [
      {path: '', component: LogDemo}
    ])
  ]
})
export class ReduxModule {}