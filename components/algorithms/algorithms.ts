import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {InsertionSort} from '../insertion-sort/insertion-sort';

@Component({
    selector: 'algorithms'
})

@View({
    templateUrl: './components/algorithms/algorithms.html',
    directives: [CORE_DIRECTIVES,InsertionSort]
})



export class Algorithms {


}
