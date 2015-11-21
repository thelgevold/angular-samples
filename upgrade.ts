import {Component,bootstrap,UpgradeAdapter} from 'angular2/angular2';
import {Algorithms} from './components/algorithms/algorithms';
import {Spreadsheet} from './components/spreadsheet/spreadsheet';
import {Adder} from './components/adder/adder';

declare var angular:any;

var adapter: UpgradeAdapter = new UpgradeAdapter();

angular.module('angular-legacy').directive('algorithms',adapter.downgradeNg2Component(Algorithms));
angular.module('angular-legacy').directive('spreadsheet',adapter.downgradeNg2Component(Spreadsheet));
angular.module('angular-legacy').directive('add',adapter.downgradeNg2Component(Adder));

adapter.bootstrap(document.body, ['angular-legacy']);
