import {Component, ComponentFactoryResolver, ViewChild, OnInit} from '@angular/core';
import {EdgeService} from './edge-service';
import {Edge} from './edge';

@Component({
    selector: 'graph',
    templateUrl: './graph.html',
    providers:[EdgeService]
})

export class Graph implements OnInit {

    constructor(private componentResolver: ComponentFactoryResolver, private edgeService:EdgeService){}

    ngOnInit(){
        this.edgeService.getCoordinates().subscribe(coordinates => {
            let factory = this.componentResolver.resolveComponentFactory(Edge);
            let res = coordinates.first.viewContainer.createComponent(factory);
            res.instance.setCoordinates(coordinates.first, coordinates.second);
        });
    }
}