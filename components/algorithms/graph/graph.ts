import {Component} from 'angular2/angular2';
import {Edge} from './edge';

@Component({
    selector: 'graph',
    directives:[Edge],
    templateUrl: './components/algorithms/graph/graph.html'
})

export class Graph {

}