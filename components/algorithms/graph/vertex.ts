import {Component, ElementRef, ViewContainerRef} from 'angular2/core';
import {EdgeService} from './edge-service';
import {Coordinates} from './coordinates';

declare var jQuery:any;

@Component({
    selector: 'vertex',
    inputs:['value'],
    template: '<div class="vertex" (click)="setCoordinates()"><span class="vertex-text">{{value}}</span></div>'
})

export class Vertex {

    elementRef: ElementRef;
    value:string;

    constructor(elementRef:ElementRef, private edgeService:EdgeService, private vc: ViewContainerRef){
        this.elementRef = elementRef;
    }

    setCoordinates(){
        var element = jQuery(this.elementRef.nativeElement).find('.vertex');
        let offset = element.offset();
        this.edgeService.next(new Coordinates(offset.left, offset.top, this.vc));
    }
}