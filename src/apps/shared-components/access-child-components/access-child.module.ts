import {NgModule} from '@angular/core';

import {Child} from './child';
import {Parent} from './parent';

@NgModule({
  declarations: [Child, Parent]
})
export class AccessChildModule {}