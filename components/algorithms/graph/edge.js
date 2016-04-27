System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Edge;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Edge = (function () {
                function Edge() {
                    this.style = {};
                }
                Edge.prototype.setCoordinates = function (first, second) {
                    this.x1 = first.x;
                    this.y1 = first.y;
                    this.x2 = second.x;
                    this.y2 = second.y;
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
                    core_1.Component({
                        selector: 'edge',
                        template: '<div class="edge" [ngStyle]="style"></div>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Edge);
                return Edge;
            }());
            exports_1("Edge", Edge);
        }
    }
});
//# sourceMappingURL=edge.js.map