var angular2_1 = require('angular2/angular2');
var algorithms_1 = require('./components/algorithms/algorithms');
var spreadsheet_1 = require('./components/spreadsheet/spreadsheet');
var adapter = new angular2_1.UpgradeAdapter();
angular.module('angular-legacy').directive('algorithms', adapter.downgradeNg2Component(algorithms_1.Algorithms));
angular.module('angular-legacy').directive('spreadsheet', adapter.downgradeNg2Component(spreadsheet_1.Spreadsheet));
adapter.bootstrap(document.body, ['angular-legacy']);
