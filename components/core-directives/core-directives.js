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
var CoreDirectives = (function () {
    function CoreDirectives() {
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    CoreDirectives = __decorate([
        angular2_1.Component({
            selector: 'core-directives',
            properties: ['numbers: numbers']
        }),
        angular2_1.View({
            templateUrl: './components/core-directives/core-directives.html',
            directives: [angular2_1.coreDirectives]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreDirectives);
    return CoreDirectives;
})();
exports.CoreDirectives = CoreDirectives;
