import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {AngularHost} from './angular-host';

@NgModule({
  imports: [SharedModule],
  declarations: [AngularHost]    
})
export class ReactIntegrationModule {}