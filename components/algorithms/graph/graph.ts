import {Component,DynamicComponentLoader, ElementRef} from 'angular2/angular2';
import {Edge} from './edge';
import {Vertex} from './vertex';

@Component({
    selector: 'graph',
    directives:[Edge,Vertex],
    templateUrl: './components/algorithms/graph/graph.html'
})

export class Graph {

    dynamicComponentLoader:DynamicComponentLoader;
    elementRef:ElementRef;

    constructor(dynamicComponentLoader:DynamicComponentLoader, elementRef:ElementRef){
        this.dynamicComponentLoader = dynamicComponentLoader;
        this.elementRef = elementRef;
    }

    elementClicked(e){
        this.dynamicComponentLoader.loadIntoLocation(Edge, this.elementRef,'tgh')
        .then((res) => {
            res.instance.setCoordinates(e.coordinates.x,e.coordinates.y,300,440)
         });
    }

}