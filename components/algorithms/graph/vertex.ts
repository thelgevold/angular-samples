import {Component, ElementRef} from 'angular2/angular2';

declare var jQuery:any;

@Component({
    selector: 'vertex',
    inputs:['value'],
    template: '<div class="circle" (click)="setCoordinates($event)"><span class="vertex-text">{{value}}</span></div>'
})

export class Vertex {

    elementRef: ElementRef;
    coordinates = {x:null,y:null};
    value:string;

    constructor(elementRef:ElementRef){
        this.elementRef = elementRef;
    }

    setCoordinates(event){
        let coordinates = jQuery(this.elementRef.nativeElement).offset();
        this.coordinates.x = coordinates.left;
        this.coordinates.y = coordinates.top;
        event.coordinates = this.coordinates;
    }
}