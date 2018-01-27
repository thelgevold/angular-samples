import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {SurveyDemo} from '../../shared-components/survey/survey-demo';
import {Survey} from '../../shared-components/survey/survey';

@NgModule({
  declarations: [SurveyDemo, Survey],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(
    [
      {path: '', component: SurveyDemo}
    ])
  ]
})
export class DynamicFormModule {}