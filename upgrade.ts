import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {platformBrowser} from '@angular/platform-browser';

import {UpgradeModule} from '@angular/upgrade/static';
import {downgradeComponent, downgradeInjectable} from '@angular/upgrade/static';

import {TextEditor} from './components/text-editor/text-editor';
import {Algorithms} from './components/algorithms/algorithms';
import {SurveyDemo} from './components/survey/survey-demo';
import {Survey} from './components/survey/survey';
import {InsertionSort} from './components/insertion-sort/insertion-sort';

import {AngularModuleNgFactory} from './upgrade-aot/upgrade-module.ngfactory';

import {UpgradePubSubService} from './upgrade-pub-sub.service';
import {MessageComponent} from './message.component';

declare var angular:any;

angular.module('angular-legacy').directive('algorithms', downgradeComponent({component: Algorithms}));
angular.module('angular-legacy').directive('survey', downgradeComponent({component: SurveyDemo}));
angular.module('angular-legacy').directive('editor', downgradeComponent({component: TextEditor}));
angular.module('angular-legacy').directive('message', downgradeComponent({component: MessageComponent}));

angular.module('angular-legacy').service('messageService', downgradeInjectable(UpgradePubSubService)); 

platformBrowser().bootstrapModuleFactory(AngularModuleNgFactory).then((ref) => {
  const adapter = ref.injector.get(UpgradeModule) as UpgradeModule;
  adapter.bootstrap(document.body, ['angular-legacy']);
});
