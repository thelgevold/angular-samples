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

    constructor(dynamicComponentLoader:DynamicComponentLoader, elementRef:ElementRef){
        this.dynamicComponentLoader = dynamicComponentLoader;
        this.elementRef = elementRef;
        this.first = null;
        this.second = null;
    }

    elementClicked(e){

        if(!e.vertex){
            return;
        }

        if(this.first === null){
            this.first = e.coordinates;
        }
        else if(this.second === null){
            this.second = e.coordinates;
            this.dynamicComponentLoader.loadIntoLocation(Edge, this.elementRef, this.first.dynamicLocation)
                .then((res) => {
                    res.instance.setCoordinates(this.first.x, this.first.y, this.second.x, this.second.y);
                    this.first = null;
                    this.second = null;
            });
        }
    }

}