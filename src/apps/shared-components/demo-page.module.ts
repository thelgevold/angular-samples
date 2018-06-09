import {NgModule} from '@angular/core';

import {DemoPage} from './demo-page';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [DemoPage],
  imports: [SharedModule],
})
export class DemoPageModule {}
