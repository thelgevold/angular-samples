import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';

import {TextEditor} from '../shared-components/text-editor/text-editor';
import {Algorithms} from '../shared-components/algorithms/algorithms';
import {SurveyDemo} from '../shared-components/survey/survey-demo';

declare var angular: any;

@NgModule({
  //  declarations: [TextEditor, Algorithms, SurveyDemo],
  entryComponents: [TextEditor, Algorithms, SurveyDemo],
  imports: [BrowserModule, UpgradeModule],
})
export class AngularModule {
  ngDoBootstrap() {}
}
