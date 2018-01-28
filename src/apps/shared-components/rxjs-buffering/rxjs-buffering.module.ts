import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {RxJsBuffering} from './rxjs-buffering';

@NgModule({
  imports: [SharedModule],
  declarations: [RxJsBuffering]    
})
export class RxJsBufferingModule {}