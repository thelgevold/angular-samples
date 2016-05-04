import {Component, DynamicComponentLoader, ViewChild, OnInit} from '@angular/core';
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

    constructor(private dynamicComponentLoader:DynamicComponentLoader, private edgeService:EdgeService){
    }

    ngOnInit(){
        this.edgeService.getCoordinates().subscribe(coordinates => {
            this.dynamicComponentLoader
                .loadNextToLocation(Edge,coordinates.first.viewContainer)
                .then((res) => {
                  res.instance.setCoordinates(coordinates.first, coordinates.second);
                })
                .catch(e => console.log(e));
        });
    }

}