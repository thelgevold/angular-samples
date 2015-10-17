import {Component} from 'angular2/angular2';
import {Greeting} from './greeting';

@Component({
    template:"<greeting [name]=\"'Joe Smith'\"></greeting>",
    directives:[Greeting]
})

export class GreetingComponent {}