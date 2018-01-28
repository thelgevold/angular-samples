import {NgModule} from '@angular/core';

import {SharedModule} from '../shared.module';

import {CommentDemo} from './comment-demo';
import {CommentSection1} from './comment-section-1';
import {CommentSection2} from './comment-section-2';

@NgModule({
  imports: [SharedModule],  
  declarations: [CommentDemo, CommentSection1, CommentSection2]    
})
export class ChangeDetectionModule {}