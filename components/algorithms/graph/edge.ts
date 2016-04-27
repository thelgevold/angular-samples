import {Component, Input} from 'angular2/core';
import {Coordinates} from './coordinates';

@Component({
    selector: 'edge',
    template: '<div class="edge" [ngStyle]="style"></div>'
})

export class Edge {
    style = {};
    x1:number;
    y1:number;
    x2:number;
    y2:number;

    setCoordinates(first, second){
        this.x1 = first.x;
        this.y1 = first.y;
        this.x2 = second.x;
        this.y2 = second.y;

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