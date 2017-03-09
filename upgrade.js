import { platformBrowser } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { TextEditor } from './components/text-editor/text-editor';
import { Algorithms } from './components/algorithms/algorithms';
import { SurveyDemo } from './components/survey/survey-demo';
import { AngularModuleNgFactory } from './upgrade-aot/upgrade-module.ngfactory';
import { UpgradePubSubService } from './upgrade-pub-sub.service';
import { MessageComponent } from './message.component';
angular.module('angular-legacy').directive('algorithms', downgradeComponent({ component: Algorithms }));
angular.module('angular-legacy').directive('survey', downgradeComponent({ component: SurveyDemo }));
angular.module('angular-legacy').directive('editor', downgradeComponent({ component: TextEditor }));
angular.module('angular-legacy').directive('message', downgradeComponent({ component: MessageComponent }));
angular.module('angular-legacy').service('messageService', downgradeInjectable(UpgradePubSubService));
platformBrowser().bootstrapModuleFactory(AngularModuleNgFactory).then(function (ref) {
    var adapter = ref.injector.get(UpgradeModule);
    adapter.bootstrap(document.body, ['angular-legacy']);
});
