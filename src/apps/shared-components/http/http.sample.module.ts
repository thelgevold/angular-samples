import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {HttpSample} from './http';

@NgModule({
  imports: [SharedModule],  
  declarations: [HttpSample]
})
export class HttpSampleModule {}