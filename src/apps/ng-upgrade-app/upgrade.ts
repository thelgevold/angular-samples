import {platformBrowser} from '@angular/platform-browser';

import {UpgradeModule} from '@angular/upgrade/static';
import {downgradeComponent} from '@angular/upgrade/static';

import {TextEditor} from '../shared-components/text-editor/text-editor';
import {Algorithms} from '../shared-components/algorithms/algorithms';
import {SurveyDemo} from '../shared-components/survey/survey-demo';

import {AngularModuleNgFactory} from './upgrade-module.ngfactory';

declare var angular: any;

angular
  .module('angular-legacy')
  .directive('algorithms', downgradeComponent({component: Algorithms}));
angular
  .module('angular-legacy')
  .directive('survey', downgradeComponent({component: SurveyDemo}));
angular
  .module('angular-legacy')
  .directive('editor', downgradeComponent({component: TextEditor}));

platformBrowser()
  .bootstrapModuleFactory(AngularModuleNgFactory)
  .then(ref => {
    const adapter = ref.injector.get(UpgradeModule) as UpgradeModule;
    adapter.bootstrap(document.body, ['angular-legacy']);
  });
