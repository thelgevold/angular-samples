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
var ContentBody = (function () {
    function ContentBody(elementRef) {
        this.element = elementRef;
    }
    ContentBody.prototype.onInit = function () {
        var body = this.element.nativeElement.querySelector(".article-body");
        body.innerHTML = this.article.body;
    };
    ContentBody = __decorate([
        angular2_1.Component({
            selector: 'content-body',
            templateUrl: './components/content-container/content-body.html',
            inputs: ['article:article']
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], ContentBody);
    return ContentBody;
})();
exports.ContentBody = ContentBody;
