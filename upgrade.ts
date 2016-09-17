import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {UpgradeAdapter} from '@angular/upgrade';

import {TextEditor} from './components/text-editor/text-editor';
import {Algorithms} from './components/algorithms/algorithms';
import {SurveyDemo} from './components/survey/survey-demo';
import {Survey} from './components/survey/survey';
import {InsertionSort} from './components/insertion-sort/insertion-sort';

declare var angular:any;

@NgModule({
  declarations: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor],
  imports: [BrowserModule, ReactiveFormsModule]
})
class UpgradeModule {}

var adapter: UpgradeAdapter = new UpgradeAdapter(UpgradeModule);

angular.module('angular-legacy').directive('algorithms',adapter.downgradeNg2Component(Algorithms));
angular.module('angular-legacy').directive('survey',adapter.downgradeNg2Component(SurveyDemo));
angular.module('angular-legacy').directive('editor',adapter.downgradeNg2Component(TextEditor));

adapter.bootstrap(document.body, ['angular-legacy']);
