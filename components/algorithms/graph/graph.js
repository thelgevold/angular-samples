import { Component, ComponentFactoryResolver } from '@angular/core';
import { EdgeService } from './edge-service';
import { Edge } from './edge';
export class Graph {
    constructor(componentResolver, edgeService) {
        this.componentResolver = componentResolver;
        this.edgeService = edgeService;
    }
    ngOnInit() {
        this.edgeService.getCoordinates().subscribe(coordinates => {
            let factory = this.componentResolver.resolveComponentFactory(Edge);
            let res = coordinates.first.viewContainer.createComponent(factory);
            res.instance.setCoordinates(coordinates.first, coordinates.second);
        });
    }
}
Graph.decorators = [
    { type: Component, args: [{
                selector: 'graph',
                templateUrl: './graph.html',
                providers: [EdgeService]
            },] },
];
Graph.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: EdgeService, },
];
