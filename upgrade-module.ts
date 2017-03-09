import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {UpgradeModule} from '@angular/upgrade/static';

import {TextEditor} from './components/text-editor/text-editor';
import {Algorithms} from './components/algorithms/algorithms';
import {SurveyDemo} from './components/survey/survey-demo';
import {Survey} from './components/survey/survey';
import {InsertionSort} from './components/insertion-sort/insertion-sort';

import {UpgradePubSubService} from './upgrade-pub-sub.service';
import {MessageComponent} from './message.component';

declare var angular:any;

@NgModule({
  declarations: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor, MessageComponent],
  entryComponents: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor, MessageComponent],  
  imports: [BrowserModule, UpgradeModule, ReactiveFormsModule],
  providers: [UpgradePubSubService]
})
export class AngularModule {
  ngDoBootstrap() {}
}
