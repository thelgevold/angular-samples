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
var content_body_1 = require('./content-body');
var http_1 = require('angular2/http');
var ContentContainer = (function () {
    function ContentContainer(http) {
        this.result = { articles: [] };
        this.http = http;
    }
    ContentContainer.prototype.onInit = function () {
        var _this = this;
        this.http.get(this.source).map(function (res) { return res.json(); }).subscribe(function (res) { return _this.result = res; });
    };
    ContentContainer = __decorate([
        angular2_1.Component({
            selector: 'content-container',
            templateUrl: './components/content-container/content-container.html',
            directives: [content_body_1.ContentBody, angular2_1.CORE_DIRECTIVES],
            inputs: ['source:source']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContentContainer);
    return ContentContainer;
})();
exports.ContentContainer = ContentContainer;
