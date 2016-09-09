import { Component, ComponentFactoryResolver } from '@angular/core';
import { EdgeService } from './edge-service';
import { Edge } from './edge';
export var Graph = (function () {
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
    Graph.decorators = [
        { type: Component, args: [{
                    selector: 'graph',
                    templateUrl: './graph.html',
                    providers: [EdgeService]
                },] },
    ];
    Graph.ctorParameters = [
        { type: ComponentFactoryResolver, },
        { type: EdgeService, },
    ];
    return Graph;
}());
