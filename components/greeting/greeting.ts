//Typical bootstrapping of the component
import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'greeting',
    properties: ['name']
})

@View({
    templateUrl: './components/greeting/greeting.html'
})

//Your custom component logic goes here
export class Greeting {

    greeting = '';
    name:string;

    createGreeting(){
        this.greeting = 'Greetings, ' + this.name;
    }
}