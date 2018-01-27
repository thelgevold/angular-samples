import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {UpgradeModule} from '@angular/upgrade/static';

import {TextEditor} from '../shared-components/text-editor/text-editor';
import {Algorithms} from '../shared-components/algorithms/algorithms';
import {SurveyDemo} from '../shared-components/survey/survey-demo';
import {Survey} from '../shared-components/survey/survey';
import {InsertionSort} from '../shared-components/insertion-sort/insertion-sort';

declare var angular:any;

@NgModule({
  declarations: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor],
  entryComponents: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor],  
  imports: [BrowserModule, UpgradeModule, ReactiveFormsModule]
})
export class AngularModule {
  ngDoBootstrap() {}
}
