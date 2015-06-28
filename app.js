/// <reference path="typings/angular2/angular2.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var demo_page_1 = require('./demo-page');
var MyDemoApp = (function () {
    function MyDemoApp() {
    }
    MyDemoApp = __decorate([
        angular2_1.Component({
            selector: 'demo-app'
        }),
        angular2_1.View({
            template: '<demo-page></demo-page>',
            directives: [demo_page_1.DemoPage]
        }), 
        __metadata('design:paramtypes', [])
    ], MyDemoApp);
    return MyDemoApp;
})();
angular2_1.bootstrap(MyDemoApp);
