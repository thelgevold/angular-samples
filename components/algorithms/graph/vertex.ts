import {Component, ElementRef} from 'angular2/angular2';

declare var jQuery:any;

@Component({
    selector: 'vertex',
    inputs:['value'],
    template: '<div class="vertex" (click)="setCoordinates($event)"><span class="vertex-text">{{value}}</span></div>'
})

export class Vertex {

    elementRef: ElementRef;
    coordinates = {x:null,y:null};
    value:string;

    constructor(elementRef:ElementRef){
        this.elementRef = elementRef;
    }

    setCoordinates(event){
        var element = jQuery(this.elementRef.nativeElement).find('.vertex');
        let offset = element.offset();

        this.coordinates.x = offset.left;
        this.coordinates.y = offset.top;
        event.coordinates = this.coordinates;
        event.coordinates.dynamicLocation = this.value.toLowerCase();
        event.vertex = true;
    }
}