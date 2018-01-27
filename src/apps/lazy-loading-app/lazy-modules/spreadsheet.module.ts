import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {Spreadsheet} from '../../shared-components/spreadsheet/spreadsheet';

@NgModule({
  declarations: [Spreadsheet],
  imports: [
    CommonModule,
    RouterModule.forChild(
    [
      {path: '', component: Spreadsheet}
    ])
  ]
})
export class SpreadsheetModule {}