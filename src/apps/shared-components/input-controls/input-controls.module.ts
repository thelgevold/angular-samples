import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {InputControls} from './input-controls';

@NgModule({
  imports: [SharedModule],  
  declarations: [InputControls]    
})
export class InputControlsModule {}