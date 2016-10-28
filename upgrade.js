import { platformBrowser } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent } from '@angular/upgrade/static';
import { TextEditor } from './components/text-editor/text-editor';
import { Algorithms } from './components/algorithms/algorithms';
import { SurveyDemo } from './components/survey/survey-demo';
import { AngularModuleNgFactory } from './upgrade-aot/upgrade-module.ngfactory';
angular.module('angular-legacy').directive('algorithms', downgradeComponent({ component: Algorithms }));
angular.module('angular-legacy').directive('survey', downgradeComponent({ component: SurveyDemo }));
angular.module('angular-legacy').directive('editor', downgradeComponent({ component: TextEditor }));
platformBrowser().bootstrapModuleFactory(AngularModuleNgFactory).then(function (ref) {
    var adapter = ref.injector.get(UpgradeModule);
    console.log('bootstrapping');
    adapter.bootstrap(document.body, ['angular-legacy']);
});
