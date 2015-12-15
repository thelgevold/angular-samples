import {Component, View} from 'angular2/core';
import {InsertionSort} from '../insertion-sort/insertion-sort';

@Component({
    selector: 'algorithms'
})

@View({
    templateUrl: './components/algorithms/algorithms.html',
    directives: [InsertionSort]
})

export class Algorithms {


}
