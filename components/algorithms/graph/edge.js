import { Component } from '@angular/core';
var Edge = (function () {
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
    return Edge;
}());
export { Edge };
Edge.decorators = [
    { type: Component, args: [{
                selector: 'edge',
                template: '<div class="edge" [ngStyle]="style"></div>'
            },] },
];
Edge.ctorParameters = function () { return []; };
