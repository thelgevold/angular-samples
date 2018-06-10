import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {HttpSample} from './http';

@NgModule({
  imports: [SharedModule],
  declarations: [HttpSample],
})
export class HttpSampleModule {}
