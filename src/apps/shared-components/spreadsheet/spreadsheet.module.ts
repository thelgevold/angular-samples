import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {Spreadsheet} from './spreadsheet';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: Spreadsheet}]),
  ],
  declarations: [Spreadsheet],
})
export class SpreadsheetModule {}
