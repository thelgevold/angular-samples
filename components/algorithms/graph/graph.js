var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ComponentFactoryResolver } from '@angular/core';
import { EdgeService } from './edge-service';
import { Edge } from './edge';
var Graph = (function () {
    function Graph(componentResolver, edgeService) {
        this.componentResolver = componentResolver;
        this.edgeService = edgeService;
    }
    Graph.prototype.ngOnInit = function () {
        var _this = this;
        this.edgeService.getCoordinates().subscribe(function (coordinates) {
            var factory = _this.componentResolver.resolveComponentFactory(Edge);
            var res = coordinates.first.viewContainer.createComponent(factory);
            res.instance.setCoordinates(coordinates.first, coordinates.second);
        });
    };
    return Graph;
}());
Graph = __decorate([
    Component({
        selector: 'graph',
        templateUrl: './graph.html',
        providers: [EdgeService]
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver, EdgeService])
], Graph);
export { Graph };
