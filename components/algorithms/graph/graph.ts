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
    first:any;
    second:any;
    counter = 0;

    constructor(dynamicComponentLoader:DynamicComponentLoader, elementRef:ElementRef){
        this.dynamicComponentLoader = dynamicComponentLoader;
        this.elementRef = elementRef;
    }

    elementClicked(e){
        this.counter++;

        if(this.counter === 1){
            this.first = e.coordinates;
        }
        if(this.counter === 2){
            this.second = e.coordinates;
            this.counter = 0;
            this.dynamicComponentLoader.loadIntoLocation(Edge, this.elementRef, this.first.dynamicLocation)
                .then((res) => {
                    res.instance.setCoordinates(this.first.x,this.first.y,this.second.x,this.second.y);
            });
        }
    }

}