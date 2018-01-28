import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {UpgradeModule} from '@angular/upgrade/static';

import {TextEditor} from '../shared-components/text-editor/text-editor';
import {AlgorithmsModule} from '../shared-components/algorithms/algorithms.module';
import {Algorithms} from '../shared-components/algorithms/algorithms';
import {SurveyDemo} from '../shared-components/survey/survey-demo';
import {Survey} from '../shared-components/survey/survey';

declare var angular:any;

@NgModule({
  declarations: [SurveyDemo, Survey, TextEditor],
  entryComponents: [SurveyDemo, Survey, TextEditor, Algorithms],  
  imports: [BrowserModule, UpgradeModule, ReactiveFormsModule, AlgorithmsModule]
})
export class AngularModule {
  ngDoBootstrap() {}
}
