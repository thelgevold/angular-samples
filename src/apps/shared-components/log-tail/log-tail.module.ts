import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {LogDemo} from './log-demo';

@NgModule({
  imports: [SharedModule],
  declarations: [LogDemo],
})
export class LogTailModule {}
