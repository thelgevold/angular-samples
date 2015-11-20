import {Component,bootstrap,UpgradeAdapter} from 'angular2/angular2';
import {Algorithms} from './components/algorithms/algorithms';
import {Angular2Host} from './components/react-integration/angular-2-host';
import {Spreadsheet} from './components/spreadsheet/spreadsheet';

declare var angular:any;

var adapter: UpgradeAdapter = new UpgradeAdapter();

angular.module('angular-legacy').directive('algorithms',adapter.downgradeNg2Component(Algorithms));
angular.module('angular-legacy').directive('spreadsheet',adapter.downgradeNg2Component(Spreadsheet));

adapter.bootstrap(document.body, ['angular-legacy']);
