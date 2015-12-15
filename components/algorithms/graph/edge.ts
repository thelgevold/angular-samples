import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'edge',
    inputs:['x1:x1','y1:y1','x2:x2','y2:y2'],
    template: '<div class="edge" [ngStyle]="style"></div>'
})

export class Edge {

    style = {};
    x1:number;
    y1:number;
    x2:number;
    y2:number;

    setCoordinates(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        this.drawLine(this.x1,this.y1,this.x2,this.y2);

    }

    drawLine(x1, y1, x2, y2){
        var length = Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
        var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        var transform = 'rotate('+angle+'deg)';

        this.style = {
            'position': 'absolute',
            'transform': transform,
            'width':length
        };
   }
}