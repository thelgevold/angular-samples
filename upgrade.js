import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/src/aot/upgrade_module';
import { downgradeComponent } from '@angular/upgrade/src/aot/downgrade_component';
import { TextEditor } from './components/text-editor/text-editor';
import { Algorithms } from './components/algorithms/algorithms';
import { SurveyDemo } from './components/survey/survey-demo';
import { AngularModuleNgFactory } from './upgrade-aot/upgrade-module.ngfactory';
angular.module('angular-legacy').directive('algorithms', downgradeComponent({ component: Algorithms }));
angular.module('angular-legacy').directive('survey', downgradeComponent({ component: SurveyDemo }));
angular.module('angular-legacy').directive('editor', downgradeComponent({ component: TextEditor }));
platformBrowserDynamic().bootstrapModuleFactory(AngularModuleNgFactory).then(function (ref) {
    var adapter = ref.injector.get(UpgradeModule);
    console.log('bootstrapping');
    adapter.bootstrap(document.body, ['angular-legacy']);
});
