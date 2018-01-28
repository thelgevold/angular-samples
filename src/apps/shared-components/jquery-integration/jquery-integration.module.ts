import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {JqueryIntegration} from './jquery-integration';

@NgModule({
  imports: [SharedModule],  
  declarations: [JqueryIntegration]    
})
export class JQueryIntegrationModule {}