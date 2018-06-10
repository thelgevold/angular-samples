import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {RxJsStreams} from './rxjs-streams';

@NgModule({
  imports: [SharedModule],
  declarations: [RxJsStreams],
})
export class RxJsStreamsModule {}
