import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'greeting',
    properties: ['name']
})

@View({
    templateUrl: './components/greeting/greeting.html'
})

export class Greeting {

    greeting = '';
    name:string;

    createGreeting(){
        this.greeting = 'Greetings, ' + this.name;
    }
}