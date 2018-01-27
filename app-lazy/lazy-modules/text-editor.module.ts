import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TextEditor} from '../../src/components/text-editor/text-editor';

@NgModule({
  declarations: [TextEditor],
  imports: [
    CommonModule,
    RouterModule.forChild(
    [
      {path: '', component: TextEditor}
    ])
  ]
})
export class TextEditorModule {}