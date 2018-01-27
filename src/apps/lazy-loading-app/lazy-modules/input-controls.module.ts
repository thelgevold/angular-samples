import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {InputControls} from '../../shared-components/input-controls/input-controls';


@NgModule({
  declarations: [InputControls],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
    [
      {path: '', component: InputControls}
    ])
  ]
})
export class InputControlsModule {}