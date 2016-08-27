import { UpgradeAdapter } from '@angular/upgrade';
import { Algorithms } from './components/algorithms/algorithms';
import { Adder } from './components/adder/adder';
import { Counter } from './components/counter/counter';
var adapter = new UpgradeAdapter();
angular.module('angular-legacy').directive('algorithms', adapter.downgradeNg2Component(Algorithms));
angular.module('angular-legacy').directive('add', adapter.downgradeNg2Component(Adder));
angular.module('angular-legacy').directive('counterButton', adapter.downgradeNg2Component(Counter));
adapter.bootstrap(document.body, ['angular-legacy']);
