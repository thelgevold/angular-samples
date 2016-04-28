System.register(['angular2/core', './edge-service', './coordinates'], function(exports_1, context_1) {
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
    var core_1, edge_service_1, coordinates_1;
    var Vertex;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (edge_service_1_1) {
                edge_service_1 = edge_service_1_1;
            },
            function (coordinates_1_1) {
                coordinates_1 = coordinates_1_1;
            }],
        execute: function() {
            Vertex = (function () {
                function Vertex(elementRef, edgeService, vc) {
                    this.edgeService = edgeService;
                    this.vc = vc;
                    this.elementRef = elementRef;
                }
                Vertex.prototype.setCoordinates = function () {
                    var element = jQuery(this.elementRef.nativeElement).find('.vertex');
                    var offset = element.offset();
                    this.edgeService.next(new coordinates_1.Coordinates(offset.left, offset.top, this.vc));
                };
                Vertex = __decorate([
                    core_1.Component({
                        selector: 'vertex',
                        inputs: ['value'],
                        template: '<div class="vertex" (click)="setCoordinates()"><span class="vertex-text">{{value}}</span></div>'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, edge_service_1.EdgeService, core_1.ViewContainerRef])
                ], Vertex);
                return Vertex;
            }());
            exports_1("Vertex", Vertex);
        }
    }
});
//# sourceMappingURL=vertex.js.map