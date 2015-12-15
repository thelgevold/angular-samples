import {Component,View} from 'angular2/core';

@Component({
    selector: 'core-directives',
    inputs: ['numbers: numbers']
})

@View({
    templateUrl: './components/core-directives/core-directives.html'
})

export class CoreDirectives {
    numbers: Array<Number>;

    constructor(){
       this.numbers = [1,2,3,4,5,6,7,8,9,10];
    }
}