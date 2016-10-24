import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {UpgradeModule} from '@angular/upgrade/src/aot/upgrade_module';
import {downgradeComponent} from '@angular/upgrade/src/aot/downgrade_component';

import {TextEditor} from './components/text-editor/text-editor';
import {Algorithms} from './components/algorithms/algorithms';
import {SurveyDemo} from './components/survey/survey-demo';
import {Survey} from './components/survey/survey';
import {InsertionSort} from './components/insertion-sort/insertion-sort';

import {AngularModuleNgFactory} from './upgrade-aot/upgrade-module.ngfactory';

declare var angular:any;

angular.module('angular-legacy').directive('algorithms', downgradeComponent({component: Algorithms}));
angular.module('angular-legacy').directive('survey', downgradeComponent({component: SurveyDemo}));
angular.module('angular-legacy').directive('editor', downgradeComponent({component: TextEditor}));

platformBrowserDynamic().bootstrapModuleFactory(AngularModuleNgFactory).then((ref) => {
  const adapter = ref.injector.get(UpgradeModule) as UpgradeModule;
  console.log('bootstrapping');
  adapter.bootstrap(document.body, ['angular-legacy']);
});
