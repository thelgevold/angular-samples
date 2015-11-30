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
var Vertex = (function () {
    function Vertex(elementRef) {
        this.coordinates = { x: null, y: null };
        this.elementRef = elementRef;
    }
    Vertex.prototype.setCoordinates = function (event) {
        var coordinates = jQuery(this.elementRef.nativeElement).offset();
        this.coordinates.x = coordinates.left;
        this.coordinates.y = coordinates.top;
        event.coordinates = this.coordinates;
        event.coordinates.dynamicLocation = this.value.toLowerCase();
    };
    Vertex = __decorate([
        angular2_1.Component({
            selector: 'vertex',
            inputs: ['value'],
            template: '<div class="circle" (click)="setCoordinates($event)"><span class="vertex-text">{{value}}</span></div>'
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], Vertex);
    return Vertex;
})();
exports.Vertex = Vertex;
