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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var JqueryIntegration = (function () {
    function JqueryIntegration(elementRef) {
        this.elementRef = elementRef;
    }
    JqueryIntegration.prototype.onInit = function () {
        jQuery(this.elementRef.nativeElement).draggable({ containment: '#draggable-parent' });
    };
    JqueryIntegration = __decorate([
        angular2_1.Component({
            selector: 'jquery-integration'
        }),
        angular2_1.View({
            templateUrl: './components/jquery-integration/jquery-integration.html'
        }),
        __param(0, angular2_1.Inject(angular2_1.ElementRef)), 
        __metadata('design:paramtypes', [Object])
    ], JqueryIntegration);
    return JqueryIntegration;
})();
exports.JqueryIntegration = JqueryIntegration;
