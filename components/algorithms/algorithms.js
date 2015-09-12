var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var insertion_sort_1 = require('../insertion-sort/insertion-sort');
var Algorithms = (function () {
    function Algorithms() {
    }
    Algorithms = __decorate([
        angular2_1.Component({
            selector: 'algorithms'
        }),
        angular2_1.View({
            templateUrl: './components/algorithms/algorithms.html',
            directives: [angular2_1.CORE_DIRECTIVES, insertion_sort_1.InsertionSort]
        }), 
        __metadata('design:paramtypes', [])
    ], Algorithms);
    return Algorithms;
})();
exports.Algorithms = Algorithms;
