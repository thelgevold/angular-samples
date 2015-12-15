import {Component} from 'angular2/core';
import {UpgradeAdapter} from 'angular2/upgrade';
import {bootstrap} from 'angular2/platform/browser';
import {Algorithms} from './components/algorithms/algorithms';
import {Adder} from './components/adder/adder';
import {Counter} from './components/counter/counter';

declare var angular:any;

var adapter: UpgradeAdapter = new UpgradeAdapter();

angular.module('angular-legacy').directive('algorithms',adapter.downgradeNg2Component(Algorithms));
angular.module('angular-legacy').directive('add',adapter.downgradeNg2Component(Adder));
angular.module('angular-legacy').directive('counterButton',adapter.downgradeNg2Component(Counter));

adapter.bootstrap(document.body, ['angular-legacy']);
