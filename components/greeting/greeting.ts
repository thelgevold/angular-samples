import {Component, View} from 'angular2/core';

@Component({
    selector: 'greeting',
    inputs: ['name']
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