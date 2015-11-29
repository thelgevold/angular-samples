import {Component} from 'angular2/angular2';
import {Edge} from './edge';
import {Vertex} from './vertex';

@Component({
    selector: 'graph',
    directives:[Edge,Vertex],
    templateUrl: './components/algorithms/graph/graph.html'
})

export class Graph {

}