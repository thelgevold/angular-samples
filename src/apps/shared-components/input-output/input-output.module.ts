import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {InputOutputDemo} from './input-output-demo';
import {InputOutput} from './input-output';

@NgModule({
  imports: [SharedModule],
  declarations: [InputOutputDemo, InputOutput],
})
export class InputOutputModule {}
