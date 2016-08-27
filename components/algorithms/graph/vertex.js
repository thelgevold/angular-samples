var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewContainerRef, ViewChild } from '@angular/core';
import { EdgeService } from './edge-service';
import { Coordinates } from './coordinates';
export let Vertex = class Vertex {
    constructor(edgeService, vc) {
        this.edgeService = edgeService;
        this.vc = vc;
    }
    setCoordinates() {
        let offsetLeft = this.element.nativeElement.offsetLeft;
        let offsetTop = this.element.nativeElement.offsetTop;
        this.edgeService.next(new Coordinates(offsetLeft, offsetTop, this.vc));
    }
};
__decorate([
    ViewChild('vertex'), 
    __metadata('design:type', ElementRef)
], Vertex.prototype, "element", void 0);
Vertex = __decorate([
    Component({
        selector: 'vertex',
        inputs: ['value'],
        template: '<div #vertex class="vertex" (click)="setCoordinates()"><span class="vertex-text">{{value}}</span></div>'
    }), 
    __metadata('design:paramtypes', [EdgeService, ViewContainerRef])
], Vertex);
