import {Component, ComponentResolver, ViewChild, OnInit} from '@angular/core';
import {Edge} from './edge';
import {Vertex} from './vertex';
import {EdgeService} from './edge-service';

@Component({
    selector: 'graph',
    directives:[Edge,Vertex],
    templateUrl: './components/algorithms/graph/graph.html',
    providers:[EdgeService]
})

export class Graph implements OnInit {

    constructor(private componentResolver: ComponentResolver, private edgeService:EdgeService){}

    ngOnInit(){
        this.edgeService.getCoordinates().subscribe(coordinates => {
            this.componentResolver.resolveComponent(Edge).then(factory => {
                let res = coordinates.first.viewContainer.createComponent(factory);
                res.instance.setCoordinates(coordinates.first, coordinates.second);
            });
        });
    }
}