import {NgModule} from '@angular/core';
import {GridDemo} from './grid-demo';
import {Grid} from './grid';

import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [GridDemo, Grid],
})
export class GridModule {}
