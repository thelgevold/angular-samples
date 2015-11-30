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
var Edge = (function () {
    function Edge() {
        this.style = {};
    }
    Edge.prototype.setCoordinates = function (x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.drawLine(this.x1, this.y1, this.x2, this.y2);
    };
    Edge.prototype.drawLine = function (x1, y1, x2, y2) {
        var length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        var transform = 'rotate(' + angle + 'deg)';
        this.style = {
            'position': 'absolute',
            'transform': transform,
            'width': length
        };
    };
    Edge = __decorate([
        angular2_1.Component({
            selector: 'edge',
            directives: [angular2_1.CORE_DIRECTIVES],
            inputs: ['x1:x1', 'y1:y1', 'x2:x2', 'y2:y2'],
            template: '<div class="edge" [ng-style]="style"></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], Edge);
    return Edge;
})();
exports.Edge = Edge;
