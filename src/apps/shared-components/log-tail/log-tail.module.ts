import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {LogDemo} from './log-demo';

@NgModule({
  imports: [SharedModule],
  declarations: [LogDemo]    
})
export class LogTailModule {}