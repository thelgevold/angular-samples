var upgrade_1 = require('angular2/upgrade');
var algorithms_1 = require('./components/algorithms/algorithms');
var adder_1 = require('./components/adder/adder');
var counter_1 = require('./components/counter/counter');
var adapter = new upgrade_1.UpgradeAdapter();
angular.module('angular-legacy').directive('algorithms', adapter.downgradeNg2Component(algorithms_1.Algorithms));
angular.module('angular-legacy').directive('add', adapter.downgradeNg2Component(adder_1.Adder));
angular.module('angular-legacy').directive('counterButton', adapter.downgradeNg2Component(counter_1.Counter));
adapter.bootstrap(document.body, ['angular-legacy']);
