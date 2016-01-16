System.register(['angular2/upgrade', './components/algorithms/algorithms', './components/adder/adder', './components/counter/counter'], function(exports_1) {
    var upgrade_1, algorithms_1, adder_1, counter_1;
    var adapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (algorithms_1_1) {
                algorithms_1 = algorithms_1_1;
            },
            function (adder_1_1) {
                adder_1 = adder_1_1;
            },
            function (counter_1_1) {
                counter_1 = counter_1_1;
            }],
        execute: function() {
            adapter = new upgrade_1.UpgradeAdapter();
            angular.module('angular-legacy').directive('algorithms', adapter.downgradeNg2Component(algorithms_1.Algorithms));
            angular.module('angular-legacy').directive('add', adapter.downgradeNg2Component(adder_1.Adder));
            angular.module('angular-legacy').directive('counterButton', adapter.downgradeNg2Component(counter_1.Counter));
            adapter.bootstrap(document.body, ['angular-legacy']);
        }
    }
});
