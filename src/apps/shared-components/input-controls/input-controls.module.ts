import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {InputControls} from './input-controls';

@NgModule({
  imports: [SharedModule],
  declarations: [InputControls],
})
export class InputControlsModule {}
