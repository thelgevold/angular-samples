import {CORE_DIRECTIVES,Component,View} from 'angular2/angular2';

@Component({
    selector: 'core-directives',
    inputs: ['numbers: numbers']
})

@View({
    templateUrl: './components/core-directives/core-directives.html',
    directives: [CORE_DIRECTIVES]
})

export class CoreDirectives {
    numbers: Array<Number>;

    constructor(){
       this.numbers = [1,2,3,4,5,6,7,8,9,10];
    }
}