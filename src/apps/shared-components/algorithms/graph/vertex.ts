import {
  Component,
  ElementRef,
  ViewContainerRef,
  ViewChild,
} from '@angular/core';
import {EdgeService} from './edge-service';
import {Coordinates} from './coordinates';

@Component({
  selector: 'vertex',
  inputs: ['value'],
  template:
    '<div #vertex class="vertex" (click)="setCoordinates()"><span class="vertex-text">{{value}}</span></div>',
})
export class Vertex {
  @ViewChild('vertex', {static: true}) element: ElementRef;
  value: string;

  constructor(private edgeService: EdgeService, private vc: ViewContainerRef) {}

  setCoordinates() {
    let offsetLeft = this.element.nativeElement.offsetLeft;
    let offsetTop = this.element.nativeElement.offsetTop;
    this.edgeService.next(new Coordinates(offsetLeft, offsetTop, this.vc));
  }
}
