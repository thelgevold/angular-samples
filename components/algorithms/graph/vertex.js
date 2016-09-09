import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { EdgeService } from './edge-service';
import { Coordinates } from './coordinates';
export var Vertex = (function () {
    function Vertex(edgeService, vc) {
        this.edgeService = edgeService;
        this.vc = vc;
    }
    Vertex.prototype.setCoordinates = function () {
        var offsetLeft = this.element.nativeElement.offsetLeft;
        var offsetTop = this.element.nativeElement.offsetTop;
        this.edgeService.next(new Coordinates(offsetLeft, offsetTop, this.vc));
    };
    Vertex.decorators = [
        { type: Component, args: [{
                    selector: 'vertex',
                    inputs: ['value'],
                    template: '<div #vertex class="vertex" (click)="setCoordinates()"><span class="vertex-text">{{value}}</span></div>'
                },] },
    ];
    Vertex.ctorParameters = [
        { type: EdgeService, },
        { type: ViewContainerRef, },
    ];
    Vertex.propDecorators = {
        'element': [{ type: ViewChild, args: ['vertex',] },],
    };
    return Vertex;
}());
