import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {TextEditor} from './text-editor';

@NgModule({
  imports: [SharedModule],
  declarations: [TextEditor],
})
export class TextEditorModule {}
