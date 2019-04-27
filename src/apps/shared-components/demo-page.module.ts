import {NgModule} from '@angular/core';

import {DemoPage} from './demo-page';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [DemoPage],
  exports: [SharedModule],
  imports: [SharedModule],
})
export class DemoPageModule {}
